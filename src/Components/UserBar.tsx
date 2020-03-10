import React from 'react';
import { withStorage } from 'HOC';
import { StorageProps } from 'HOC/injectors/withStorage';
import { Loading } from 'Components';

interface User {
  username: string;
  favoriteMovie: string;
}

interface UserBarProps extends StorageProps {
  fetchUserInfo(): Promise<User>;
}

interface UserBarState {
  username: string;
  favoriteMovie: string;
}

class UserBar extends React.Component<UserBarProps, UserBarState> {
  state: UserBarState = {
    username: '',
    favoriteMovie: '',
  };

  componentDidMount() {
    const username = this.props.load('username');
    const favoriteMovie = this.props.load('favoriteMovie');

    if (!username || !favoriteMovie) {
      this.props.fetchUserInfo().then((user: User) => {
        this.props.save('username', user.username);
        this.props.save('favoriteMovie', user.favoriteMovie);
        this.setState({
          username: user.username,
          favoriteMovie: user.favoriteMovie,
        });
      });
    } else {
      this.setState({ username, favoriteMovie });
    }
  }

  render() {
    const { username, favoriteMovie } = this.state;

    if (!username || !favoriteMovie) {
      return <Loading />;
    }

    return (
      <div>
        Username: {username}
        <br />
        FavoriteMovie: {favoriteMovie}
      </div>
    );
  }
}

const WrappedUserBar = withStorage(UserBar);

export default WrappedUserBar;
