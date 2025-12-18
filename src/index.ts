import { ApiClient } from './client';
import { PaymentService } from './payment';
import { SmsService } from './sms';
import { TransferService } from './transfert';
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

  constructor(config: ApiConfig) {
    // Client spécifique pour Payment (par défaut: https://ariarypay.com/payment)
    this.paymentClient = new ApiClient(config, config.paymentBaseUrl);
    // Client pour SMS et Transfert (par défaut: https://fs-pay-rifont.atydago.com/payment)
    const smsTransferConfig = { ...config, baseUrl: config.baseUrl || 'https://fs-pay-rifont.atydago.com/payment' };
    this.defaultClient = new ApiClient(smsTransferConfig);

    this.payment = new PaymentService(this.paymentClient);
    this.sms = new SmsService(this.defaultClient);
    this.transfer = new TransferService(this.defaultClient);
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
