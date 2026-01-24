// ============ NOTIF-TASK TYPES ============

export interface CreateNotifTaskDto {
  message: string;
  phones: string[];
}

export interface UpdateNotifTaskDto {
  message?: string;
  phones?: string[];
}

export interface ResponseNotifTaskDto {
  id: string;
  message: string;
  phones: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface SmsDetail {
  id: string;
  phone: string;
  message: string;
  status: string;
  attempts: number;
  lastAttempt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NotifTaskDetailsDto {
  id: string;
  message: string;
  status: string;
  totalSms: number;
  successCount: number;
  failedCount: number;
  pendingCount: number;
  smsDetails: SmsDetail[];
  createdAt: string;
  updatedAt: string;
}

export interface RetryFailedSmsResponseDto {
  status: string;
  message: string;
  retried?: number;
}
