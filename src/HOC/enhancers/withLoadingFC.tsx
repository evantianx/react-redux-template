import React from 'react';

import { Loading } from 'Components';

// rewrite it with function component rather than a class:
const withLoadingFC = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & WithLoadingProps> => ({
  loading,
  ...props
}: WithLoadingProps) =>
  loading ? <Loading /> : <Component {...(props as P)} />;

export default withLoadingFC;
