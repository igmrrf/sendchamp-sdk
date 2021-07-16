import { AxiosInstance, AxiosResponse } from 'axios';
import endpoints from '../constants/endpoints';
import {
  RegisterSenderConfig,
  SendSMSConfig,
  SendSMSResponse,
} from '../constants/interfaces';

class SMS {
  static axiosInstance: AxiosInstance;

  send = async (config: SendSMSConfig): Promise<unknown> => {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.SEND_SMS,
        method: 'POST',
        data: config,
      });

      return response.data as SendSMSResponse;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };

  getStatus = async (sms_message_id: string): Promise<unknown> => {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.getReport(sms_message_id),
        method: 'GET',
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };

  registerSender = async (config: RegisterSenderConfig): Promise<unknown> => {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.REGISTER_SENDER,
        method: 'POST',
        data: config,
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };
}

export default SMS;
