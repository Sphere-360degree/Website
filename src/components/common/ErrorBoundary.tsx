import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '../ui/Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in SPHERIONIX UI:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f7f4] p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-white border border-[#171717]/10 shadow-md space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#c2410c] font-bold">
              SPHERIONIX System Notice
            </span>
            <h1 className="text-2xl font-extrabold text-[#171717]">
              Something went wrong.
            </h1>
            <p className="text-xs sm:text-sm text-[#666663] leading-relaxed">
              We encountered an unexpected interface issue. Please reload the page or contact our team directly at info@spherionix.com.
            </p>
            <div className="pt-2">
              <Button onClick={this.handleReload} variant="primary">
                Reload Application
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
