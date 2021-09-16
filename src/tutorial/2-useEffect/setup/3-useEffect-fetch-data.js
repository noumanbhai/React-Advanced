import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

const UseEffectFetchData = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setusers(users);
    // console.log("users ==>>>", users);
  };
  useEffect(() => {
    getUsers();
    // return () => {
    //   cleanup;
    // };
  }, []);
  // debugger;
  return (
    <div>
      <h2>fetch data</h2>
      <ul className="users">
        {users.map((user) => {
          const { userId, id, title, body } = user;
          return (
            <div>
              <li key={id}>
                <div>
                  <h3>{id}</h3>
                  <h4>
                    <a href="">{title}</a>
                  </h4>
                  <h5>{body}</h5>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
