import React from 'react';

const MISSING_ERROR = 'Error was swallowed during propagation';

interface WithErrorBoundaryHocState {
  error: Error | null | undefined;
}

const withErrorBoundary = <BaseProps extends {}>(
  BaseComponent: React.ComponentType<BaseProps>,
) =>
  class Hoc extends React.Component<{}, WithErrorBoundaryHocState> {
    // Enhance component name for debugging and React-Dev-Tools
    static displayName = `withErrorBoundary${BaseComponent.name}`;

    // Reference to original wrapped component
    static readonly WrappedComponent = BaseComponent;

    state: WithErrorBoundaryHocState = {
      error: undefined,
    };

    componentDidCatch(error: Error | null, info: object) {
      const catchedError = error ?? new Error(MISSING_ERROR);
      this.setState({ error: catchedError });
      this.logErrorToCloud(catchedError, info);
    }

    logErrorToCloud = (error: Error, info: object) => {
      // Send error report to service provider
    };

    render() {
      const { children, ...restProps } = this.props;
      const { error } = this.state;

      if (error) {
        return <BaseComponent {...(restProps as BaseProps)} />;
      }

      return children;
    }
  };

export default withErrorBoundary;
