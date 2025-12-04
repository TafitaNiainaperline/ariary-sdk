import { ApiClient } from './client';
import { PaymentService } from './payment';
import { SmsService } from './sms';
import { TransferService } from './transfert';
import { ApiConfig, CreatePaymentDto, PaymentResponseDto } from './types';

/**
 * SDK client pour l'API de paiement Ariary
 */
export class AriarySDK {
  private apiClient: ApiClient;
  public payment: PaymentService;
  public sms: SmsService;
  public transfer: TransferService;

  constructor(config: ApiConfig) {
    this.apiClient = new ApiClient(config);
    this.payment = new PaymentService(this.apiClient);
    this.sms = new SmsService(this.apiClient);
    this.transfer = new TransferService(this.apiClient);
  }
}


export async function sendPayment(
  apiKey: string,
  code: string,
  amount: number,
  projectId: string
): Promise<PaymentResponseDto> {
  const sdk = new AriarySDK({ apiKey, secretId: '', projectId });
  const paymentData: CreatePaymentDto = { code, amount, projectId };
  return sdk.payment.createPayment(paymentData);
}

export * from './types';
export { ApiClient } from './client';
export { PaymentService } from './payment';
export { SmsService } from './sms';
export { TransferService } from './transfert';
