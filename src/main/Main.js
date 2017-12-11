import React from 'react';

import { Content } from '../content/Content';
import { Aside } from '../aside/Aside';

import './main.scss';
import { UserList } from '../UserList/UserList';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: []
    };
    this.getUsers();
  }
  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }
  getPosts = (id) => {
    this.state.posts = [];
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }
  onUserClick = (user) => {
    this.getPosts(user.id);
  }

  render() {
    return (
      <main className="main">
        <Content />
        <Aside />
        <UserList
          list={this.state.users}
          onClick={this.onUserClick}
          posts={this.state.posts}
        />
      </main>
    );
  }
}
