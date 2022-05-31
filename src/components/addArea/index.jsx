import { useState } from "react";
import "./style.css";

export function AddArea({ onEnter }) {
  const [addItem, setAddItem] = useState("");

  const keyUp = e => {
    if (e.code === "Enter" && addItem !== "") {
      onEnter(addItem);
      setAddItem("");
    }
  };

  return (
    <div className="container">
      <p className="plus">+</p>
      <input
        type="text"
        className="input-addArea"
        placeholder="Adicionar tarefa..."
        value={addItem}
        onChange={e => setAddItem(e.target.value)}
        onKeyUp={keyUp}
      />
    </div>
  );
}
