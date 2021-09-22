import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setpeople] = useState(data);
  const removePerson = (id) => {
    setpeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>Drop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SilglePerson
            key={person.id}
            {...person}
            removePerson={SilglePerson}
          />
        );
      })}
    </>
  );
};
const SilglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
