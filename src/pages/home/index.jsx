import { useState } from "react";
import { AddArea } from "../../components/addArea";
import "./style.css";
import { ListAdd } from "../../components/listAdd";

function Home() {
    const [itemtask, setItem] = useState([]);

    function addTask(newTask) {
        const newList = {
            id: itemtask.length + 1,
            task: newTask,
            done: false,
        };
        setItem((prevState) => [...prevState, newList]);
    }

    function handleTaskChange(id, done) {
        let newList = [...itemtask];
        for (let i in newList) {
            if (newList[i].id === id) {
                newList[i].done = done;
            }
        }
        setItem(newList);
    }

    function removeTask(index) {
        let filtered = itemtask.filter((i) => i.id !== index);
        setItem(filtered);
    }

    return (
        <div className="home">
            <h1>TodoWeb</h1>
            <AddArea onEnter={addTask} />
            {itemtask.map((todo, index) => (
                <ListAdd
                    key={index}
                    item={todo}
                    onChange={handleTaskChange}
                    onClick={() => removeTask(todo.id)}
                />
            ))}
        </div>
    );
}

export default Home;
