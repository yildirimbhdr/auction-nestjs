export class BaseResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | null;
  timestamp: string;
  path?: string;
  errors?: string[];

  constructor(partial: Partial<BaseResponse<T>>) {
    Object.assign(this, partial);
    this.timestamp = new Date().toISOString();
  }

  static ok<T>(data: T, message = 'Success'): BaseResponse<T> {
    return new BaseResponse<T>({
      success: true,
      statusCode: 200,
      message,
      data,
    });
  }

  static fail<T>(
    message: string,
    statusCode = 400,
    errors?: string[],
  ): BaseResponse<T> {
    return new BaseResponse<T>({
      success: false,
      statusCode,
      message,
      data: null,
      errors,
    });
  }
}