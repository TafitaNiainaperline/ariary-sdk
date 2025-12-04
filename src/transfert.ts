import { ApiClient } from './client';
import { SendTransactionDto, SendTransactionResponse } from './types';

export class TransferService {
  constructor(private client: ApiClient) {}

  /**
   * Envoie une transaction à un numéro de téléphone
   * @param transactionData Les données de la transaction
   * @returns La réponse de création de la transaction
   */
  async sendTransaction(
    transactionData: SendTransactionDto
  ): Promise<SendTransactionResponse> {
    const response = await this.client.post<SendTransactionResponse>(
      '/api/send-transaction',
      transactionData,
      true
    );

    return response;
  }

  /**
   * Récupère toutes les transactions de l'application
   * @returns La liste de toutes les transactions
   */
  async getAllTransactions(): Promise<SendTransactionResponse[]> {
    const response = await this.client.get<SendTransactionResponse[]>(
      '/api/send-transaction',
      true
    );

    return response;
  }

  /**
   * Récupère une transaction spécifique par son ID
   * @param transactionId L'ID de la transaction à récupérer
   * @returns La transaction demandée
   */
  async getTransactionById(
    transactionId: string
  ): Promise<SendTransactionResponse> {
    const response = await this.client.get<SendTransactionResponse>(
      `/api/send-transaction/${transactionId}`,
      true
    );

    return response;
  }

  /**
   * Met à jour une transaction (numéro et montant avant traitement)
   * @param transactionId L'ID de la transaction à mettre à jour
   * @param transactionData Les nouvelles données de la transaction
   * @returns La transaction mise à jour
   */
  async updateTransaction(
    transactionId: string,
    transactionData: SendTransactionDto
  ): Promise<SendTransactionResponse> {
    const response = await this.client.patch<SendTransactionResponse>(
      `/api/send-transaction/${transactionId}`,
      transactionData,
      true
    );

    return response;
  }
}
