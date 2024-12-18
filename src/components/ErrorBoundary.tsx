import React, { Component, ErrorInfo, ReactNode } from 'react';

// Props interface for ErrorBoundary component
interface Props {
  children: ReactNode; // The child components to render
  fallback?: ReactNode; // Optional fallback UI to display on error
}

// State interface for ErrorBoundary component
interface State {
  hasError: boolean; // Indicates if an error has occurred
  error: Error | null; // The error object if an error has occurred
}

/**
 * ErrorBoundary component is a React component that catches JavaScript errors
 * in its child component tree and displays a fallback UI instead of crashing.
 *
 * @extends React.Component
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  /**
   * Updates the state when an error is caught.
   *
   * @param {Error} error - The error that was thrown.
   * @returns {State} The new state with hasError set to true.
   */
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  /**
   * Logs the error to the console for debugging purposes.
   *
   * @param {Error} error - The error that was thrown.
   * @param {ErrorInfo} errorInfo - Additional information about the error.
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-primary-50">
            <div className="text-center p-8">
              <h2 className="text-2xl font-display font-bold text-secondary-800 mb-4">
                Something went wrong
              </h2>
              <p className="text-secondary-600 mb-4">
                We're sorry, but something unexpected happened.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-accent-600 text-white px-6 py-3 rounded-lg hover:bg-accent-700 transition-all"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children; // Render child components if no error
  }
}
