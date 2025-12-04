export interface CreatePaymentDto {
  code: string;
  amount: number;
  projectId: string;
}

export interface PaymentResponseDto {
  id: string;
  transactionId: string;
  amount: number;
  rest: number;
  projectId: string;
  status: string;
  parts: Array<{
    id: string;
    amount: number;
    transactionId: string;
    date: string;
  }>;
  createdAt: string;
  updatedAt: string;
}
