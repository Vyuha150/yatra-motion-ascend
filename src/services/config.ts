// API Configuration for Yatra Elevators Backend
export const API_CONFIG = {
  baseURL: process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_API_URL || 'http://localhost:5000'
    : 'http://localhost:5000',
  timeout: 30000, // Increased timeout to 30 seconds for debugging
  headers: {
    'Content-Type': 'application/json',
  }
};

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    PROFILE: '/api/auth/profile',
    CHANGE_PASSWORD: '/api/auth/change-password',
  },
  
  // Products
  PRODUCTS: {
    BASE: '/api/products',
    BY_ID: (id: string) => `/api/products/${id}`,
  },
  
  // Projects
  PROJECTS: {
    BASE: '/api/projects',
    BY_ID: (id: string) => `/api/projects/${id}`,
    MILESTONES: (id: string) => `/api/projects/${id}/milestones`,
    MILESTONE_BY_ID: (id: string, milestoneId: string) => `/api/projects/${id}/milestones/${milestoneId}`,
  },
  
  // Contacts
  CONTACTS: {
    BASE: '/api/contacts',
    BY_ID: (id: string) => `/api/contacts/${id}`,
    RESPONSES: (id: string) => `/api/contacts/${id}/responses`,
    ASSIGN: (id: string) => `/api/contacts/${id}/assign`,
  },
  
  // Orders
  ORDERS: {
    BASE: '/api/orders',
    BY_ID: (id: string) => `/api/orders/${id}`,
    STATUS: (id: string) => `/api/orders/${id}/status`,
    NOTES: (id: string) => `/api/orders/${id}/notes`,
    CANCEL: (id: string) => `/api/orders/${id}/cancel`,
  },
  
  // Users
  USERS: {
    BASE: '/api/users',
    BY_ID: (id: string) => `/api/users/${id}`,
    ROLE: (id: string) => `/api/users/${id}/role`,
    RESET_PASSWORD: (id: string) => `/api/users/${id}/reset-password`,
    STATS: '/api/users/stats',
  },
  
  // AMC
  AMC: {
    BASE: '/api/amc',
    BY_ID: (id: string) => `/api/amc/${id}`,
    SERVICE: (id: string) => `/api/amc/${id}/service`,
    RENEW: (id: string) => `/api/amc/${id}/renew`,
    STATS: '/api/amc/stats',
  },
  
  // Service Tickets
  SERVICE_TICKETS: {
    BASE: '/api/service-tickets',
    BY_ID: (id: string) => `/api/service-tickets/${id}`,
    ASSIGN: (id: string) => `/api/service-tickets/${id}/assign`,
    COMMUNICATION: (id: string) => `/api/service-tickets/${id}/communication`,
    STATUS: (id: string) => `/api/service-tickets/${id}/status`,
    FEEDBACK: (id: string) => `/api/service-tickets/${id}/feedback`,
    STATS: '/api/service-tickets/stats',
  },
  
  // Leads
  LEADS: {
    BASE: '/api/leads',
    BY_ID: (id: string) => `/api/leads/${id}`,
    ASSIGN: (id: string) => `/api/leads/${id}/assign`,
    INTERACTIONS: (id: string) => `/api/leads/${id}/interactions`,
    NOTES: (id: string) => `/api/leads/${id}/notes`,
    STATUS: (id: string) => `/api/leads/${id}/status`,
    STATS: '/api/leads/stats',
  },
  
  // Invoices
  INVOICES: {
    BASE: '/api/invoices',
    BY_ID: (id: string) => `/api/invoices/${id}`,
    PAYMENT: (id: string) => `/api/invoices/${id}/payment`,
    STATS: '/api/invoices/stats',
  },
  
  // Careers
  CAREERS: {
    JOBS: '/api/careers/jobs',
    APPLY: '/api/careers/apply',
    APPLICATIONS: '/api/careers/applications',
    APPLICATION_BY_ID: (id: string) => `/api/careers/applications/${id}`,
    APPLICATION_STATUS: (id: string) => `/api/careers/applications/${id}/status`,
    INTERVIEW: (id: string) => `/api/careers/applications/${id}/interview`,
    INTERVIEW_FEEDBACK: (id: string, roundId: string) => `/api/careers/applications/${id}/interview/${roundId}/feedback`,
    ASSIGN: (id: string) => `/api/careers/applications/${id}/assign`,
    NOTES: (id: string) => `/api/careers/applications/${id}/notes`,
    STATS: '/api/careers/stats',
  },

  // Dashboard
  DASHBOARD: {
    STATS: '/api/dashboard/stats',
    RECENT_ACTIVITIES: '/api/dashboard/recent-activities',
    GENERATE_REPORT: '/api/dashboard/reports/monthly',
    SEND_AMC_NOTIFICATIONS: '/api/dashboard/amc-notifications',
    BACKUP_DATABASE: '/api/dashboard/backup',
  }
};

export default API_CONFIG;
