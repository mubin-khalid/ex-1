import React from 'react';
import { notification } from 'antd';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  renderError() {
    notification.error({
      message: 'Error',
      description: 'Something went wrong. Please try again later.',
    })
  }
  render() {
    if (this.state.hasError) {
      this.renderError();
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;