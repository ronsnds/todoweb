import { useState } from "react";
import "./style.css";

export function AddArea({ onEnter }) {
    const [addItem, setAddItem] = useState("");

    const keyUp = (e) => {
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
                placeholder="Add your task...  (max 80)"
                value={addItem}
                onChange={(e) => setAddItem(e.target.value)}
                onKeyUp={keyUp}
                maxLength={80}
            />
        </div>
    );
}
