import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [option, setOption] = useState("male");
  const [dropdown, setDropdown] = useState("");
  // const [bick, setBick] = useState("");
  const [people, setPeople] = useState({
    firstName: "",
    email: "",
    age: "",
    option: "",
    dropdown: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName("");
  //     setEmail("");
  //   } else {
  //     console.log("empty values");
  //   }
  // };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="name"
              value={option}
              onChange={(e) => setOption(e.target.checked)}
              checked={true}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="name"
              value={option}
              onChange={(e) => setOption(e.target.checked)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="books">Books:</label>
            <select
              name="cars"
              id="books"
              defaultValue={dropdown}
              onChange={
                (e) => setDropdown(e.target.value)
                // console.log(e.target.value)
              }
            >
              <option value="">-----CHOOSE-------</option>
              <option value="HTML">HTML</option>
              <option value="PHP">PHP</option>
              <option value="CSS">CSS</option>
              <option value="Jvascript">Jvascript</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="books">I have a bike</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
              onChange={(e) => setDropdown(e.target.checked)}
            />
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
              onChange={(e) => setDropdown(e.target.checked)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
