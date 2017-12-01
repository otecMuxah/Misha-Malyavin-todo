import React from 'react';

// export class Users extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         users: [],
//     //         loading: false
//     //     };
//     // }
//     // getUsers = () => {
//     //     this.setState({ loading: true, users: [] });
//     //
//     //     fetch('https://jsonplaceholder.typicode.com/users')
//     //         .then(response => response.json())
//     //         .then(users => this.setState({users: users, loading: false}));
//     // };
//     // showAlert = (arg) => {
//     //     alert(arg);
//     // };
//
//     render(){
//         // return <ul>{this.state.users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
//
//
//         // return [
//         //     <button
//         //         key='1'
//         //         onClick={this.getUsers}
//         //     >Get users</button>,
//         //
//         //     <ul key='2'>{this.state.users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
//         // ]
//
//         // const { users, loading } = this.state;
//         // const elements = [
//         //     <button
//         //         key='1'
//         //         onClick={this.getUsers}
//         //     >Get users</button>,
//         //
//         //     <ul key='2'>{users.map(user => <li onClick={()=>this.props.clickHandler(user)} key={user.id}>{user.name}</li>)}</ul>
//         // ];
//         //
//         // if (loading) {
//         //     console.log('Hello !!!');
//         //     elements.push(<span key='3'>Loading ...</span>    )
//         // }
//         //
//         // return elements;
//
//         return (<ul key='2'>{this.props.users.map(user => <li onClick={()=>this.props.clickHandler(user)} key={user.id}>{user.name}</li>)}</ul>);
//     }
// }

export const Users = ({ users, clickHandler }) => (
  <ul key="2">{users.map(user => <li onClick={() => clickHandler(user)} key={user.id}>{user.name}</li>)}</ul>
);
