// Custom error types for the application

/**
 * Represents an API error.
 */
export class ApiError extends Error {
  public readonly code: string;
  public readonly retryCount: number;

  /**
   * Creates an instance of ApiError.
   * @param message - The error message.
   * @param code - The error code.
   * @param retryCount - The number of retry attempts.
   */
  constructor(message: string, code: string, retryCount: number) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.retryCount = retryCount;
  }
}

/**
 * Represents a network error.
 */
export class NetworkError extends Error {
  /**
   * Creates an instance of NetworkError.
   * @param message - The error message.
   */
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

/**
 * Represents a validation error.
 */
export class ValidationError extends Error {
  /**
   * Creates an instance of ValidationError.
   * @param message - The error message.
   */
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
