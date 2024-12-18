import { ApiError } from '../types/errors';

const RETRY_DELAYS = [1000, 2000, 4000]; // Exponential backoff delays in milliseconds

/**
 * Fetches a resource with retry logic in case of failure.
 * @param url - The URL to fetch.
 * @param options - Optional fetch options.
 * @param retryCount - The current retry attempt count.
 * @returns A promise that resolves to the response.
 */
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
  } catch (err) {
    return handleFetchError(err, url, options, retryCount);
  }
}

/**
 * Handles errors during the fetch operation and retries if applicable.
 * @param error - The error that occurred.
 * @param url - The URL to fetch.
 * @param options - Optional fetch options.
 * @param retryCount - The current retry attempt count.
 * @returns A promise that resolves to the response or throws an error.
 */
async function handleFetchError(
  error: unknown,
  url: string,
  options: RequestInit,
  retryCount: number
): Promise<Response> {
  console.error('Fetch error:', error);

  if (retryCount >= RETRY_DELAYS.length) {
    throw new ApiError(
      'Maximum retry attempts reached',
      'MAX_RETRY_EXCEEDED',
      retryCount
    );
  }

  await delay(RETRY_DELAYS[retryCount]);
  return fetchWithRetry(url, options, retryCount + 1);
}

/**
 * Delays execution for a specified amount of time.
 * @param ms - The delay duration in milliseconds.
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Formats an API error into a readable string.
 * @param error - The error to format.
 * @returns A formatted error message.
 */
export function formatApiError(error: unknown): string {
  if (error instanceof ApiError) {
    return `${error.message} (${error.code})`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}
