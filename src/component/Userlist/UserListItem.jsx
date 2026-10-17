import React from "react";

function UserListItem(props) {
  const {
    isLight,
    selectUser,
    user: { id, isSelect, firstName, lastName },
  } = props;
  const inlineStyle = {
    backgroundColor: isSelect ? (isLight ? "yellow" : "blue") : "transparent",
  };
  return (
    <li style={inlineStyle} onClick={() => selectUser(id)}>
      {firstName}
      {lastName}
    </li>
  );
}

export default UserListItem;
