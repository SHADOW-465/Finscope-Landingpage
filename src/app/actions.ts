"use server";

import * as fs from "fs";
import * as path from "path";
import * as xlsx from "xlsx";

export type DemoSubmission = {
  name: string;
  companyName: string;
  role: string;
  phone: string;
  email: string;
  city: string;
  monthlyFiles: string;
  currentProcess: string;
  message: string;
};

export async function submitDemoRequest(formData: DemoSubmission) {
  try {
    const {
      name,
      companyName,
      role,
      phone,
      email,
      city,
      monthlyFiles,
      currentProcess,
      message,
    } = formData;

    // Simple validation
    if (!name || !companyName || !email || !phone) {
      return { success: false, error: "Missing required fields." };
    }

    const timestamp = new Date().toISOString();

    const DATA_DIR = path.join(process.cwd(), "data");
    const EXCEL_PATH = path.join(DATA_DIR, "submissions.xlsx");
    const CSV_PATH = path.join(DATA_DIR, "submissions.csv");
    const JSON_PATH = path.join(DATA_DIR, "submissions.json");

    // Ensure the data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    const newRow = {
      Name: name,
      "Company Name": companyName,
      Role: role,
      Phone: phone,
      Email: email,
      City: city,
      "Monthly Loan Files Processed": monthlyFiles,
      "Current Process": currentProcess,
      Message: message,
      Timestamp: timestamp,
    };

    // 1. Save to Excel (.xlsx) using SheetJS
    let workbook: xlsx.WorkBook;
    if (fs.existsSync(EXCEL_PATH)) {
      workbook = xlsx.readFile(EXCEL_PATH);
    } else {
      workbook = xlsx.utils.book_new();
    }

    let sheet = workbook.Sheets["Submissions"];
    let list: any[] = [];
    if (sheet) {
      list = xlsx.utils.sheet_to_json(sheet);
    }
    list.push(newRow);

    const newSheet = xlsx.utils.json_to_sheet(list);
    
    // Set nice column widths for Excel formatting
    newSheet["!cols"] = [
      { wch: 20 }, // Name
      { wch: 25 }, // Company Name
      { wch: 20 }, // Role
      { wch: 15 }, // Phone
      { wch: 25 }, // Email
      { wch: 15 }, // City
      { wch: 30 }, // Monthly Loan Files Processed
      { wch: 30 }, // Current Process
      { wch: 40 }, // Message
      { wch: 25 }, // Timestamp
    ];

    if (sheet) {
      workbook.Sheets["Submissions"] = newSheet;
    } else {
      xlsx.utils.book_append_sheet(workbook, newSheet, "Submissions");
    }
    xlsx.writeFile(workbook, EXCEL_PATH);

    // 2. Save to CSV
    const escapeCsv = (val: string) => {
      if (val === undefined || val === null) return "";
      const clean = val.replace(/"/g, '""');
      if (clean.includes(",") || clean.includes("\n") || clean.includes('"')) {
        return `"${clean}"`;
      }
      return clean;
    };

    const csvHeaders = [
      "Name",
      "Company Name",
      "Role",
      "Phone",
      "Email",
      "City",
      "Monthly Loan Files Processed",
      "Current Process",
      "Message",
      "Timestamp",
    ];

    const csvRow = [
      name,
      companyName,
      role,
      phone,
      email,
      city,
      monthlyFiles,
      currentProcess,
      message,
      timestamp,
    ]
      .map(escapeCsv)
      .join(",");

    const csvFileExists = fs.existsSync(CSV_PATH);
    if (!csvFileExists) {
      fs.writeFileSync(CSV_PATH, csvHeaders.join(",") + "\n", "utf-8");
    }
    fs.appendFileSync(CSV_PATH, csvRow + "\n", "utf-8");

    // 3. Save to JSON
    let jsonList: any[] = [];
    if (fs.existsSync(JSON_PATH)) {
      try {
        const raw = fs.readFileSync(JSON_PATH, "utf-8");
        jsonList = JSON.parse(raw);
        if (!Array.isArray(jsonList)) {
          jsonList = [];
        }
      } catch (e) {
        jsonList = [];
      }
    }
    jsonList.push(newRow);
    fs.writeFileSync(JSON_PATH, JSON.stringify(jsonList, null, 2), "utf-8");

    return { success: true };
  } catch (error) {
    console.error("Error saving submission:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred.",
    };
  }
}
