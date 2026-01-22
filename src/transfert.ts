import { ApiClient } from './client';
import { SendTransactionResponse } from './types';

export class TransferService {
  constructor(private client: ApiClient) {}

  async send(
    phone: string,
    amount: number
  ): Promise<SendTransactionResponse> {
    const response = await this.client.post<SendTransactionResponse>(
      '/api/send-transaction',
      { phone, amount },
      true
    );

    return response;
  }
}
