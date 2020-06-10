import React, { useState, useEffect } from "react";

const UserCard = (props) => {
  let { user } = props;

  let { name, email } = user;

  return (
    <div className={"card"}>
      <p key={name}>{name}</p>
      <p key={email}>{email}</p>
    </div>
  );
};

export default UserCard;
