import { ApiClient } from './client';
import { PaymentService } from './payment';
import { SmsService } from './sms';
import { TransferService } from './transfert';
import { NotifTaskService } from './notif-task';
import { ApiConfig, CreatePaymentDto, PaymentResponseDto } from './types';

/**
 * SDK client pour l'API de paiement Ariary
 */
export class AriarySDK {
  private paymentClient: ApiClient;
  private defaultClient: ApiClient;
  public payment: PaymentService;
  public sms: SmsService;
  public transfer: TransferService;
  public notifTask: NotifTaskService;

  constructor(config: ApiConfig) {
    // Utilise une URL de base unique pour tous les services
    const finalConfig = { ...config, baseUrl: config.baseUrl || 'https://back.ariari.mg/payment/api-docs' };
    this.paymentClient = new ApiClient(finalConfig);
    this.defaultClient = new ApiClient(finalConfig);

    this.payment = new PaymentService(this.paymentClient);
    this.sms = new SmsService(this.defaultClient);
    this.transfer = new TransferService(this.defaultClient);
    this.notifTask = new NotifTaskService(this.defaultClient);
  }
}


export async function sendPayment(
  code: string,
  amount: number,
  projectId: string,
  secretId: string
): Promise<PaymentResponseDto> {
  const sdk = new AriarySDK({ secretId, projectId });
  const paymentData: CreatePaymentDto = { code, amount, projectId };
  return sdk.payment.createPayment(paymentData);
}

export * from './types';
export { ApiClient } from './client';
export { PaymentService } from './payment';
export { SmsService } from './sms';
export { TransferService } from './transfert';
export { NotifTaskService } from './notif-task';
export * from './notif-task/types';
