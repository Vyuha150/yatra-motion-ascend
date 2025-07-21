import { httpClient, ApiResponse } from './httpClient';
import { API_ENDPOINTS } from './config';

export interface Product {
  _id: string;
  name: string;
  category: 'home_elevators' | 'passenger_elevators' | 'freight_elevators' | 'modernization';
  description: string;
  specifications: {
    capacity: string;
    speed: string;
    floors: string;
    dimensions: {
      width: string;
      depth: string;
      height: string;
    };
  };
  features: string[];
  pricing: {
    basePrice: number;
    installationPrice: number;
    currency: string;
    isQuoteRequired: boolean;
  };
  images: Array<{
    url: string;
    alt: string;
    isPrimary: boolean;
  }>;
  certifications: Array<{
    name: string;
    issuedBy: string;
    validUntil?: string;
  }>;
  availability: {
    isAvailable: boolean;
    leadTime: string;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  isActive?: boolean;
}

export interface ProductsResponse {
  products: Product[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

class ProductService {
  async getProducts(
    page: number = 1,
    limit: number = 10,
    filters?: ProductFilters
  ): Promise<ApiResponse<ProductsResponse>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }

    return await httpClient.get<ProductsResponse>(`${API_ENDPOINTS.PRODUCTS.BASE}?${params.toString()}`);
  }

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    return await httpClient.get<Product>(API_ENDPOINTS.PRODUCTS.BY_ID(id));
  }

  async createProduct(productData: Omit<Product, '_id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Product>> {
    return await httpClient.post<Product>(API_ENDPOINTS.PRODUCTS.BASE, productData);
  }

  async updateProduct(id: string, productData: Partial<Product>): Promise<ApiResponse<Product>> {
    return await httpClient.put<Product>(API_ENDPOINTS.PRODUCTS.BY_ID(id), productData);
  }

  async deleteProduct(id: string): Promise<ApiResponse<{ message: string }>> {
    return await httpClient.delete<{ message: string }>(API_ENDPOINTS.PRODUCTS.BY_ID(id));
  }

  async searchProducts(query: string): Promise<ApiResponse<ProductsResponse>> {
    return await httpClient.get<ProductsResponse>(`${API_ENDPOINTS.PRODUCTS.BASE}?search=${encodeURIComponent(query)}`);
  }

  async getProductsByCategory(category: string): Promise<ApiResponse<ProductsResponse>> {
    return await httpClient.get<ProductsResponse>(`${API_ENDPOINTS.PRODUCTS.BASE}?category=${category}`);
  }
}

export const productService = new ProductService();
export default productService;
