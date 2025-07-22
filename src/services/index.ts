// API Services
export { default as httpClient } from './httpClient';
export type { ApiResponse } from './httpClient';

export { default as authService } from './authService';
export type { User, LoginCredentials, RegisterData, LoginResponse } from './authService';

export { default as productService } from './productService';
export type { Product, ProductFilters, ProductsResponse } from './productService';

export { default as contactService } from './contactService';
export type { Contact, ContactCreateData, ContactFilters } from './contactService';

export { clientRequirementService } from './clientRequirementService';
export type { ClientRequirement, ClientRequirementStats } from './clientRequirementService';

export { customerFeedbackService } from './customerFeedbackService';
export type { CustomerFeedback, CustomerFeedbackCreateData, CustomerFeedbackFilters, CustomerFeedbackStats } from './customerFeedbackService';

// API Configuration
export { API_CONFIG, API_ENDPOINTS } from './config';

// Import for re-export
import authService from './authService';
import productService from './productService';
import contactService from './contactService';
import { clientRequirementService } from './clientRequirementService';
import { customerFeedbackService } from './customerFeedbackService';

// Re-export for convenience
export const api = {
  auth: authService,
  products: productService,
  contacts: contactService,
  clientRequirements: clientRequirementService,
  customerFeedback: customerFeedbackService,
};
