import { useState } from "react";
import { AddArea } from "./components/addArea";
import "./App.css";
import { ListAdd } from "./components/listAdd";

function App() {
    const [color, setColor] = useState("black");
    const [itemtask, setItem] = useState([]);

    function addTask(newTask) {
        let newList = [...itemtask];
        newList.push({
            id: itemtask.length + 1,
            task: newTask,
            done: false,
        });
        setItem(newList);
    }

    function handleTaskChange(id, done) {
        let newList = [...itemtask];
        for (let i in newList) {
            if (newList[i].id === id) {
                newList[i].done = done;
            }
        }
        setItem(newList);
        update();
    }

    function update(id) {
        for (let i in itemtask) {
            if (itemtask[i].done === false && itemtask[i].id != id) {
                console.log(
                    itemtask[i].done === false && itemtask[i].id === id
                );
                setColor("red");
            } else {
                setColor("black");
            }
        }
    }

    return (
        <div className="App">
            <AddArea onEnter={addTask} />
            {itemtask.map((todo, index) => (
                <ListAdd
                    key={index}
                    item={todo}
                    onChange={handleTaskChange}
                    co={color}
                />
            ))}
        </div>
    );
}

export default App;
