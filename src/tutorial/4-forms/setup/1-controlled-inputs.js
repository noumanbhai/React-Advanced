import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [people, setpeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };
      // console.log(person);
      setpeople((people) => {
        return [...people, person];
      });
      setname("");
      setemail("");
    } else {
      console.log("form is not submit");
    }
  };

  return (
    <div>
      <h1>controlled inputs</h1>;
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person, index) => {
          const { id, name, email } = person;

          return (
            <div key={id} className="item">
              <p>Youe Name:{name}</p>
              <p>Your Email:{email}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default ControlledInputs;
