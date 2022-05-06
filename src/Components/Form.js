import React, { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [data, setData] = useState([
    { txt: "hey", id: uuidv4() },
    { txt: "yo", id: uuidv4() },
  ]);
  const [stateInput, setStateInput] = useState();

  const linkInput = (e) => {
    setStateInput(e);
  };

  const addTodo = (e) => {
    const newArr = [...data];
    e.preventDefault();
    const newTodo = {};
    newTodo.txt = stateInput;
    newTodo.id = uuidv4();
    newArr.push(newTodo);
    setData(newArr);
    setStateInput('')
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={(e) => addTodo(e)} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Choses a faire
        </label>
        <input
        value={stateInput}
          onInput={(e) => linkInput(e.target.value)}
          type="text"
          className="form-control"
          id="todo"
        />
        <button className="mt-2 btn btn-primary d-block">Envoyez</button>
      </form>
      <h2>Liste des choses a faire :</h2>
      <ul className="list-group">
        {data.map((item, index) => {
          return <Item txt={item.txt} />;
        })}
      </ul>
    </div>
  );
}

export default Form;
