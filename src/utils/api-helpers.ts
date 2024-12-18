import { ApiError } from '../types/errors';

const RETRY_DELAYS = [1000, 2000, 4000]; // Exponential backoff delays in ms

export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retryCount = 0
): Promise<Response> {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        'HTTP_ERROR',
        retryCount
      );
    }
    
    return response;
  } catch (error) {
    if (retryCount >= RETRY_DELAYS.length) {
      throw new ApiError(
        'Maximum retry attempts reached',
        'MAX_RETRY_EXCEEDED',
        retryCount
      );
    }

    await new Promise(resolve => setTimeout(resolve, RETRY_DELAYS[retryCount]));
    return fetchWithRetry(url, options, retryCount + 1);
  }
}

export function formatApiError(error: unknown): string {
  if (error instanceof ApiError) {
    return `${error.message} (${error.code})`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}