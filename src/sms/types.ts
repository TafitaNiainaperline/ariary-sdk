// ============ SMS TYPES ============
export interface CreateSmsDto {
  message: string;
  phone: string;
}

export interface SendSmsDto {
  message: string;
  phones: string[];
}

export interface BulkSmsDto {
  messages: {
    phones: string[];
    message: string;
  }[];
}

export interface SendSmsResponseDto {
  id: string;
  message: string;
  phone: string;
  status: string;
  createdAt: string;
}

export interface ResponseSmsDto {
  id: string;
  message: string;
  phone: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface MultiSmsResponseDto {
  status: string;
  data: {
    id: string;
    message: string;
    phone: string;
    status: string;
  }[];
}

export interface BulkSmsResponseDto {
  status: string;
  data: {
    id: string;
    message: string;
    phone: string;
    status: string;
  }[];
}
