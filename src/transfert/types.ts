// ============ TRANSACTION/TRANSFER TYPES ============
export interface SendTransactionDto {
  phone: string;
  amount: number;
}

export interface SendTransactionResponse {
  id: string;
  phone: string;
  amount: number;
  status: string;
  message: string;
  requestId: string;
  projectId: string;
  secretId: string;
  createdAt: string;
}

export interface TransactionResponseDto {
  id: string;
  phone: string;
  amount: number;
  rest?: number;
  status: string;
  ticketCode: string;
  createdAt: string;
  updatedAt: string;
}
