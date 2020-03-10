import React from 'react';

import { Loading } from 'Components';

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <Loading /> : <Component {...(props as P)} />;
    }
  };

export default withLoading;
