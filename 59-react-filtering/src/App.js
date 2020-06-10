import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * 
 * Exercise:
 * 1. fetch data from the server(json-server)only if you don't
 * have contacts in state
 * 2. create input which will filter contacts on view based in user query(input value)
 * 3. render contacts
 * 
 * Contact HTML structure
 * =======================
 *	<li>
		<p>{name}</p>
		<p className={"company"}>{company}</p>
	</li>
 */

const App = () => {
  const [users, setUser] = useState([]);
  const [selectedUser, setSelectedUSer] = useState("All");

  const fetchData = async () => {
    if (users !== []) {
      const fetchData = await fetch(
        "http://localhost:3001/contacts"
      ).then((response) => response.json());

      setUser([...fetchData, ...users]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers =
    selectedUser === "All"
      ? users
      : users.filter((user) => user.name.match(selectedUser));

  const handleChange = (event) => {
    setSelectedUSer(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <ul>
        {filteredUsers.map((el) => (
          <li>
            <p>{el.name}</p>
            <p className={"Company"}>{el.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
