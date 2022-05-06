import React, { useState } from "react";
import Item from "./Item";

function Form() {
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Choses a faire
        </label>
        <input type="text" className="form-control" id="todo" />
        <button className="mt-2 btn btn-primary d-block">Envoyez</button>
      </form>
      <h2>Liste des choses a faire :</h2>
      <ul className="list-group">
        <Item />
        <Item />
      </ul>
    </div>
  );
}

export default Form;
