import { ApiClient } from './client';
import { MultiSmsResponseDto, BulkSmsResponseDto, ResponseSmsDto } from './types';

export class SmsService {
  constructor(private client: ApiClient) {}

  async notify(
    message: string,
    numbers: string | string[]
  ): Promise<MultiSmsResponseDto> {
    const phones = Array.isArray(numbers) ? numbers : [numbers];

    const response = await this.client.post<MultiSmsResponseDto>(
      '/api/sms/multi',
      { phones, message },
      true
    );

    return response;
  }

  async notifyBulk(
    messages: { message: string; numbers: string | string[] }[]
  ): Promise<BulkSmsResponseDto> {
    const bulkMessages = messages.map((item) => ({
      message: item.message,
      phones: Array.isArray(item.numbers) ? item.numbers : [item.numbers],
    }));

    const response = await this.client.post<BulkSmsResponseDto>(
      '/api/sms/bulk',
      { messages: bulkMessages },
      true
    );

    return response;
  }

  async getAll(): Promise<ResponseSmsDto[]> {
    const response = await this.client.get<ResponseSmsDto[]>(
      '/api/sms',
      true
    );

    return response;
  }
}
