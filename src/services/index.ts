// API Services
export { default as httpClient } from './httpClient';
export type { ApiResponse } from './httpClient';

export { default as authService } from './authService';
export type { User, LoginCredentials, RegisterData, LoginResponse } from './authService';

export { default as productService } from './productService';
export type { Product, ProductFilters, ProductsResponse } from './productService';

export { default as contactService } from './contactService';
export type { Contact, ContactCreateData, ContactFilters } from './contactService';

// API Configuration
export { API_CONFIG, API_ENDPOINTS } from './config';

// Import for re-export
import authService from './authService';
import productService from './productService';
import contactService from './contactService';

// Re-export for convenience
export const api = {
  auth: authService,
  products: productService,
  contacts: contactService,
};
