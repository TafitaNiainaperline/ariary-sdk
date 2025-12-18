// Re-export all types from sub-modules
export * from './payment/types';
export * from './sms/types';
export * from './transfert/types';

// ============ API RESPONSE & CONFIG TYPES ============
export interface ApiResponse<T> {
  status: string;
  data?: T;
  message?: string;
}

export interface ApiConfig {
  apiKey: string;
  secretId: string;
  projectId: string;
  baseUrl?: string;
  paymentBaseUrl?: string;
}
