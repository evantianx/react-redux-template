import React from 'react';
import { Subtract } from 'utility-types';

export interface StorageProps {
  load: (key: string) => string;
  save: (key: string, data: string) => void;
  remove: (key: string) => void;
}

interface StorageState {
  localStorageAvaliable: boolean;
}

const withStorage = <P extends StorageProps>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class HOC extends React.Component<Subtract<P, StorageProps>, StorageState> {
    state: StorageState = {
      localStorageAvaliable: false,
    };

    componentDidMount() {
      this.checkLocalStorageExists();
    }

    checkLocalStorageExists() {
      const testKey = 'test';

      try {
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        this.setState({ localStorageAvaliable: true });
      } catch (e) {
        this.setState({
          localStorageAvaliable: false,
        });
      }
    }

    load = (key: string): string => {
      if (this.state.localStorageAvaliable) {
        return localStorage.getItem(key) || '';
      }
      return '';
    };

    save = (key: string, data: string) => {
      if (this.state.localStorageAvaliable) {
        localStorage.setItem(key, data);
      }
    };

    remove = (key: string) => {
      if (this.state.localStorageAvaliable) {
        localStorage.removeItem(key);
      }
    };

    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...(this.props as P)}
        />
      );
    }
  };

export default withStorage;
