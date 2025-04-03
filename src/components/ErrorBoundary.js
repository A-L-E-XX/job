import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null, info: null };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // Optionally log the error to an external service (e.g., Sentry)
    console.error("Error caught by Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
