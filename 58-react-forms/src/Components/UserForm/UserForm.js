import React, { useState } from "react";

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
  });

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if( userInfo.firstName   !== ""){
        postUser(userInfo)
    } else {
      console.log('can not be posted')
    }
  

  }



  const postUser = async (user) => {
    return fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
  
      .then((data) => data)
      .catch((error) => console.log("Oops something went wrong!"));
  };

  return (
    <form className="state" onChange={handleChange} onSubmit={handleSubmit}>
      <input
        type="text"
        className="firstName"
        name="firstName"
        value={userInfo.firstName}
        required
      />

      <input
        type="text"
        className="lastName"
        name="lastName"
        value={userInfo.lastName}
        required
      />

      <input
        type="number"
        name="age"
        className="age"
        value={userInfo.age}
        required
      />

      <select
        type="select"
        name="gender"
        className="gender"
        value={userInfo.gender}
        required
      >
        <option>Female</option>
        <option>Male</option>
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};

export default UserForm;
