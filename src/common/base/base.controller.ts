import { Logger } from '@nestjs/common';
import { BaseResponse } from './base.response';

export abstract class BaseController {
  protected abstract readonly logger: Logger;

  protected async executeAsync<T>(
    action: () => Promise<T>,
    successMessage?: string,
  ): Promise<BaseResponse<T>> {
    
    const startTime = Date.now();
    const actionName = action.name || 'anonymous';
    try {
      const result = await action();

      const duration = Date.now() - startTime;
      this.logger.log(`[SUCCESS] ${actionName} done (${duration}ms)`);

      return BaseResponse.ok(result, successMessage);
    } catch (error) {
      const duration = Date.now() - startTime;
      this.logger.error(
        `[ERROR] ${actionName} failed (${duration}ms): ${error.message}`,
        error.stack,
      );
      return BaseResponse.fail(
        'An unexpected error occurred',
        500,
        [error.message],
      );
    }
  }
}
