// src/mockData.js

/**
 * MOCK_USERS: Local authentication database.
 * Demo Credentials: 
 * - admin / password123
 * - accountant / password123
 */
export const MOCK_USERS = [
    {
        userId: "101",
        username: "admin",
        password: "password123", 
        role: "admin",
        avatar: "https://i.pravatar.cc/150?u=admin"
    },
    {
        userId: "102",
        username: "accountant",
        password: "password123",
        role: "accountant",
        avatar: "https://i.pravatar.cc/150?u=jane"
    }
];

/**
 * MOCK_ENTRIES: Data for the 'Expenses' category in the Master View.
 */
export const MOCK_ENTRIES = [
    { 
        id: 1, 
        primeKey: "1001", 
        creditCard: "Amex - 1004", 
        contract: "ABC East", 
        vendor: "Office Depot", 
        amount: "150.75", 
        submitter: "admin",
        status: "Submitted"
    },
    { 
        id: 2, 
        primeKey: "1002", 
        creditCard: "Visa - 5582", 
        contract: "Rev-Tech", 
        vendor: "Amazon AWS", 
        amount: "1200.00", 
        submitter: "admin",
        status: "Processed"
    },
    { 
        id: 3, 
        primeKey: "1003", 
        creditCard: "MasterCard", 
        contract: "XYZ West", 
        vendor: "Staples", 
        amount: "45.20", 
        submitter: "accountant",
        status: "Pending"
    }
];

/**
 * MOCK_PROJECT_SETUP: Data for the 'Project Setup' category.
 */
export const MOCK_PROJECT_SETUP = [
    { 
        id: 1, 
        projectName: "Solar Phase II", 
        client: "XYZ East", 
        submitter: "admin", 
        
        date: "2024-03-20" ,
        status: "Pending"
    },
    { 
        id: 2, 
        projectName: "Grid Optimization", 
        client: "Rev-Tech", 
        submitter: "admin", 
         
        date: "2024-03-18",
        status: "Approved", 
    },
    { 
        id: 3, 
        projectName: "Battery Storage", 
        client: "XYZ West", 
        submitter: "accountant",  
        date: "2024-03-22" ,
        status: "In Review",
    }
];

/**
 * MOCK_WORKFORCE: Data for the 'Project & Workforce' category.
 */
export const MOCK_WORKFORCE = [
    { 
        id: 1, 
        employee: "John Doe", 
        role: "Lead Engineer", 
        project: "Solar Phase II", 
        rate: "125.00", 
        submitter: "admin" ,
        status: "Pending" 
    },
    { 
        id: 2, 
        employee: "Alice Smith", 
        role: "Analyst", 
        project: "Grid Optimization", 
        rate: "95.00", 
        submitter: "admin",
        status: "Approved" 
    },
    { 
        id: 3, 
        employee: "Bob Wilson", 
        role: "Technician", 
        project: "Solar Phase II", 
        rate: "75.00", 
        submitter: "accountant",
        status: "In Review" 
    }
];

/**
 * MOCK_ONBOARDING: Data for the 'Employee Onboarding' category.
 */
export const MOCK_ONBOARDING = [
    { 
        id: 1, 
        name: "Robert Fox", 
        dept: "Engineering", 
        hireDate: "2024-04-01", 
        type: "Regular", 
        submitter: "admin" ,
        status: "Pending"
    },
    { 
        id: 2, 
        name: "Jenny Wilson", 
        dept: "Marketing", 
        hireDate: "2024-04-05", 
        type: "Contract", 
        submitter: "admin",
        status: "In Review" 
    },
    { 
        id: 3, 
        name: "Jessica Alba", 
        dept: "Finance", 
        hireDate: "2025-04-05", 
        type: "Contract", 
        submitter: "admin",
        status: "Approved" 
    }
];

/**
 * MOCK_CUSTOMERS: Data for the 'Customer Setup' category.
 */
export const MOCK_CUSTOMERS = [
    { 
        id: 1, 
        customerName: "Energy Corp", 
        industry: "Commercial", 
        contact: "Mark Reed", 
        status: "Active" 
    },
    { 
        id: 2, 
        customerName: "Dept of Energy", 
        industry: "Government", 
        contact: "Sarah Hall", 
        status: "Active" 
    }
];

/**
 * MOCK_VENDORS: Data for the 'Vendor Setup' category.
 */
export const MOCK_VENDORS = [
    { 
        id: 1, 
        vendorName: "Office Depot", 
        category: "Supplies", 
        terms: "Net 30", 
        taxId: "XX-XXX1234",
        status: "Approved" 
    },
    { 
        id: 2, 
        vendorName: "Amazon Web Services", 
        category: "Cloud", 
        terms: "Credit Card", 
        taxId: "XX-XXX5678",
        status: "In Review" 
    }
];

/**
 * Dropdown Options used for Add/Edit logic placeholders.
 */
export const MOCK_CONTRACT_OPTIONS = [
    "Lumina Solar - East", 
    "Lumina Solar - West", 
    "Rev-Tech Solutions"
];

export const MOCK_CREDIT_CARD_OPTIONS = [
    "Amex - 1004", 
    "Visa - 5582", 
    "MasterCard"
];

