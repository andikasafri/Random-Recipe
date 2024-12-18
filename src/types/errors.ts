// Custom error types for the application
export class ApiError extends Error {
  constructor(
    public readonly message: string,
    public readonly code: string,
    public readonly retryCount: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}