import React from 'react';

export interface MouseProviderProps {
  render: (state: MouseProviderState) => React.ReactNode;
}

interface MouseProviderState {
  readonly x: number;
  readonly y: number;
}

class MouseProvider extends React.Component<
  MouseProviderProps,
  MouseProviderState
> {
  state: MouseProviderState = { x: 0, y: 0 };

  handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default MouseProvider;
