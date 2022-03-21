import { useState } from "react";
import { Task } from "./components/task";
import { AddArea } from "./components/addArea";
import "./App.css";

function App() {
    const [item, setItem] = useState([
        { id: 1, task: "Fazer compras.", done: false },
        { id: 2, task: "Fazer tarefa.", done: false },
    ]);

    function addTask(newTask) {
        let newList = [...item];
        newList.push({
            id: item.length + 1,
            task: newTask,
            done: false,
        });

        setItem(newList);
    }

    return (
        <div className="App">
            <AddArea onEnter={addTask} />
            {item.map((todo, index) => (
                <Task key={index.id} check={todo.done} item={todo.task} />
            ))}
        </div>
    );
}

export default App;
