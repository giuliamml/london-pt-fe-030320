import React, { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";

/**
 * Exercise
 * 1. fetch data and store it in {users} state.
 * 2. Pass user data as {user} prop for UserCard component and render all users.
 * 3. In UserCard component, render user name, and user email.
 * Inside UserCard add class "card" to wrapper.
 *
 * NOTE: DB url - http://localhost:3000/contacts
 */

const App = () => {
  const [user, setUsers] = useState([]);

  const fetchData = async () => {
    let response = await fetch("http://localhost:3001/contacts");
    let users = await response.json();

    setUsers([...user, ...users]);
  };

  useEffect(() => {
    fetchData();
  },[]);

  console.log(user);

  return (
    <div className="container">
      {user.map((user) => (
        <UserCard user={user}/>
      ))}
    </div>
  );
};

export default App;
