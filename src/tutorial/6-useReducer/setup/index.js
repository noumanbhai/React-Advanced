import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setname] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setpeople] = useState(data);
  // const [showModel, setshowModel] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "TESTING", payload: newItem });
      setname("");
      // setshowModel(true);
      // setpeople([...people, { id: new Date().getTime().toString(), name }]);
      // setname("");
    } else {
      // setshowModel(true);
      dispatch({ type: "NO_ITEM" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
