import { ApiClient } from './client';
import { CreatePaymentDto, PaymentResponseDto } from './types';

export class PaymentService {
  constructor(private client: ApiClient) {}

  /**
   * Crée un nouveau paiement
   * @param paymentData Les données du paiement
   * @returns La réponse de création du paiement
   */
  async createPayment(
    paymentData: CreatePaymentDto
  ): Promise<PaymentResponseDto> {
    const response = await this.client.post<PaymentResponseDto>(
      '/api/payments',
      paymentData,
      false
    );

    return response;
  }

  /**
   * Récupère tous les paiements de l'application
   * @returns La liste de tous les paiements
   */
  async getAllPayments(): Promise<PaymentResponseDto[]> {
    const response = await this.client.get<PaymentResponseDto[]>(
      '/api/payments',
      false
    );

    return response;
  }

  /**
   * Récupère un paiement par son ID
   * @param paymentId L'ID du paiement à récupérer
   * @returns Le paiement demandé
   */
  async getPaymentById(paymentId: string): Promise<PaymentResponseDto> {
    const response = await this.client.get<PaymentResponseDto>(
      `/api/payments/${paymentId}`,
      false
    );

    return response;
  }

  /**
   * Met à jour le reste d'un paiement avec un code de ticket
   * @param paymentId L'ID du paiement à mettre à jour
   * @param ticketCode Le code du ticket à associer
   * @returns Le paiement mis à jour
   */
  async updatePaymentRest(
    paymentId: string,
    ticketCode: string
  ): Promise<PaymentResponseDto> {
    const response = await this.client.put<PaymentResponseDto>(
      `/api/payments/${paymentId}/rest`,
      { ticketCode },
      false
    );

    return response;
  }
}
