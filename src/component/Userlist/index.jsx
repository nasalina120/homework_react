import React, { Component } from "react";
import UserListItem from "./UserListItem";

const userData = [
  { id: 1, firstName: "firstName", lastName: "lastName" },
  { id: 2, firstName: "firstName2", lastName: "lastName2" },
  { id: 3, firstName: "firstName3", lastName: "lastName3" },
];
export default class Userlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: userData.map((u) => ({ ...u, isSelect: false })),
    };
  }

  selctUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);
    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelect: !newUsers[foundIndex].isSelect,
    };
    this.setState({ users: newUsers });
  };

  mapUser = (u) => {
    const { isLight } = this.props;
    const inlineStyle = {
      backgroundColor: u.isSelect ? "yellow" : "transparent",
    };
    return (
      <UserListItem
        key={u.id}
        user={u}
        selectUser={this.selctUser}
        isLight={isLight}
      />
    );
  };
  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
