import { useState } from "react";
import { AddArea } from "./components/addArea";
import "./App.css";

function App() {
    const [item, setItem] = useState([]);

    let newList = [...item];

    function addTask(newTask) {
        newList.push({
            id: item.length + 1,
            task: newTask,
        });

        setItem(newList);
    }

    return (
        <div className="App">
            <AddArea onEnter={addTask} />
            {item.map((todo, index) => (
                <div className="container-task" key={index}>
                    <input
                        value={false}
                        type="checkbox"
                        className="inputCheck"
                        id={index}
                    />
                    <label className="textList" from={index}>
                        {todo.task}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default App;
