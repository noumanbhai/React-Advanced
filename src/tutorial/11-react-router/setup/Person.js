import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setname] = useState("default name");
  // console.log(useParams());
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setname(newPerson.name);
  }, []);

  return (
    <div>
      <h2>person</h2>
      <h4>{name}</h4>
      <Link to="/people" className="btn">
        Bck
      </Link>
    </div>
  );
};

export default Person;
