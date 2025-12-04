import { ApiClient } from './client';
import {
  SendSmsDto,
  BulkSmsDto,
  ResponseSmsDto,
  MultiSmsResponseDto,
  BulkSmsResponseDto,
} from './types';

export class SmsService {
  constructor(private client: ApiClient) {}

  async sendMultiSms(smsData: SendSmsDto): Promise<MultiSmsResponseDto> {
    const response = await this.client.post<MultiSmsResponseDto>(
      '/api/sms/multi',
      smsData,
      true
    );

    return response;
  }

 
  async sendBulkSms(bulkData: BulkSmsDto): Promise<BulkSmsResponseDto> {
    const response = await this.client.post<BulkSmsResponseDto>(
      '/api/sms/bulk',
      bulkData,
      true
    );

    return response;
  }


  async getSmsHistory(): Promise<ResponseSmsDto[]> {
    const response = await this.client.get<ResponseSmsDto[]>(
      '/api/sms',
      true
    );

    return response;
  }

 
  async getSmsById(smsId: string): Promise<ResponseSmsDto> {
    const response = await this.client.get<ResponseSmsDto>(
      `/api/sms/${smsId}`,
      true
    );

    return response;
  }


  async updateSms(
    smsId: string,
    updateData: Partial<SendSmsDto>
  ): Promise<ResponseSmsDto> {
    const response = await this.client.patch<ResponseSmsDto>(
      `/api/sms/${smsId}`,
      updateData,
      true
    );

    return response;
  }

  
  async deleteSms(smsId: string): Promise<ResponseSmsDto> {
    const response = await this.client.patch<ResponseSmsDto>(
      `/api/sms/${smsId}`,
      {},
      true
    );

    return response;
  }
}
