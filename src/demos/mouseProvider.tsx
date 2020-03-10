import React from 'react';

import { MouseProvider } from 'Components';

export default () => (
  <MouseProvider
    render={mouse => (
      <p>
        The mouse position is {mouse.x}, {mouse.y}
      </p>
    )}
  />
);
