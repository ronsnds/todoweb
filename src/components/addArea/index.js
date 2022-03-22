import { useState } from "react";
import "./addArea.css";

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
                placeholder="Add your task..."
                value={addItem}
                onChange={(e) => setAddItem(e.target.value)}
                onKeyUp={keyUp}
            />
        </div>
    );
}
