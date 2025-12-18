import axios, { AxiosInstance } from 'axios';
import { ApiConfig } from './types';

export class ApiClient {
  private client: AxiosInstance;
  private config: ApiConfig;

  constructor(config: ApiConfig, baseUrl?: string) {
    this.config = config;

    const finalBaseUrl = baseUrl || config.baseUrl || 'https://ariarypay.com/payment';

    this.client = axios.create({
      baseURL: finalBaseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Effectue une requête POST avec les en-têtes d'authentification
   */
  async post<T>(
    endpoint: string,
    data: any,
    requiresSecret: boolean = true
  ): Promise<T> {
    const headers: any = {
      'x-project-id': this.config.projectId,
    };

    if (requiresSecret) {
      headers['x-secret-id'] = this.config.secretId;
    }

    try {
      const response = await this.client.post(endpoint, data, { headers });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Effectue une requête GET avec les en-têtes d'authentification
   */
  async get<T>(
    endpoint: string,
    requiresSecret: boolean = true
  ): Promise<T> {
    const headers: any = {
      'x-project-id': this.config.projectId,
    };

    if (requiresSecret) {
      headers['x-secret-id'] = this.config.secretId;
    }

    try {
      const response = await this.client.get(endpoint, { headers });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Effectue une requête PATCH avec les en-têtes d'authentification
   */
  async patch<T>(
    endpoint: string,
    data: any,
    requiresSecret: boolean = true
  ): Promise<T> {
    const headers: any = {
      'x-project-id': this.config.projectId,
    };

    if (requiresSecret) {
      headers['x-secret-id'] = this.config.secretId;
    }

    try {
      const response = await this.client.patch(endpoint, data, { headers });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Effectue une requête PUT avec les en-têtes d'authentification
   */
  async put<T>(
    endpoint: string,
    data: any,
    requiresSecret: boolean = true
  ): Promise<T> {
    const headers: any = {
      'x-project-id': this.config.projectId,
    };

    if (requiresSecret) {
      headers['x-secret-id'] = this.config.secretId;
    }

    try {
      const response = await this.client.put(endpoint, data, { headers });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Gère les erreurs API
   */
  private handleError(error: any): Error {
    if (error.response) {
      const status = error.response.status;
      const message =
        error.response.data?.message || error.response.statusText;
      return new Error(`[${status}] ${message}`);
    }
    return error;
  }
}
