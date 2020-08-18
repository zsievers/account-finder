import React, { Component } from 'react';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
      {
        id: '2',
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
      {
        id: '3',
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.map((user) => (
          <div>{user.login}</div>
        ))}
      </div>
    );
  }
}

export default Users;
