import { ApiClient } from './client';
import {
  CreateNotifTaskDto,
  ResponseNotifTaskDto,
  NotifTaskDetailsDto,
  UpdateNotifTaskDto,
  RetryFailedSmsResponseDto,
} from './notif-task/types';

export class NotifTaskService {
  constructor(private client: ApiClient) {}

  async create(
    createNotifTaskDto: CreateNotifTaskDto
  ): Promise<ResponseNotifTaskDto> {
    const response = await this.client.post<ResponseNotifTaskDto>(
      '/api/notif-task',
      createNotifTaskDto,
      true
    );

    return response;
  }

  async findAll(projectId: string): Promise<ResponseNotifTaskDto[]> {
    const response = await this.client.get<ResponseNotifTaskDto[]>(
      `/api/notif-task?projectId=${projectId}`,
      true
    );

    return response;
  }

  async findOne(id: string): Promise<ResponseNotifTaskDto> {
    const response = await this.client.get<ResponseNotifTaskDto>(
      `/api/notif-task/${id}`,
      true
    );

    return response;
  }

  async update(
    id: string,
    updateNotifTaskDto: UpdateNotifTaskDto
  ): Promise<ResponseNotifTaskDto> {
    const response = await this.client.patch<ResponseNotifTaskDto>(
      `/api/notif-task/${id}`,
      updateNotifTaskDto,
      true
    );

    return response;
  }

  async remove(id: string): Promise<ResponseNotifTaskDto> {
    const response = await this.client.delete<ResponseNotifTaskDto>(
      `/api/notif-task/${id}`,
      true
    );

    return response;
  }

  async getSmsDetails(id: string): Promise<NotifTaskDetailsDto> {
    const response = await this.client.get<NotifTaskDetailsDto>(
      `/api/notif-task/${id}/sms-details`,
      true
    );

    return response;
  }

  async retryFailedSms(id: string): Promise<RetryFailedSmsResponseDto> {
    const response = await this.client.post<RetryFailedSmsResponseDto>(
      `/api/notif-task/${id}/retry-failed-sms`,
      {},
      true
    );

    return response;
  }
}
