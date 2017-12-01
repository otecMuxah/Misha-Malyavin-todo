import React from 'react';

import { StatusMessage } from '../StatusMsg/status-message';
// import { Counter } from '../counter/Counter';
import { Users } from '../Users/Users';

import './main.scss';

const getProps = text => ({
  valid: true,
  text: text || 'Logon was successful !!!'
});

const Comps = {
  List() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    );
  },
  Message(props) {
    return <mark>{props.text}</mark>;
  }
};

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }


  showAlert = (user) => {
    alert(`${user.email}: ${user.phone}`);
  };

  getUsers = () => {
    this.setState({ loading: true, users: [] });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users, loading: false }));
  };

  render() {
    const { users, loading } = this.state;

    return (
      <main className="main">
        <p>main</p>
        <StatusMessage />
        <StatusMessage {...getProps('Torolololo')} />

        <Comps.List />
        <Comps.Message text="test me" />

        {/* {<Counter />} */}
        <button onClick={this.getUsers}>Get users</button>

        <Users clickHandler={this.showAlert} users={users} />

        {loading && <span>Loading ...</span>}
      </main>
    );
  }
}
