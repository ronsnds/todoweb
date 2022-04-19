import { useState } from "react";
import { AddArea } from "../../components/addArea";
import "./style.css";
import { ListAdd } from "../../components/listAdd";

function Home() {
    const [itemtask, setItem] = useState([]);

    function addTask(newTask) {
        const newList = {
            id: new Date(),
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
                    done={todo.done}
                    task={todo.task}
                    onChange={(e) =>
                        handleTaskChange(todo.id, e.target.checked)
                    }
                    onClick={() => removeTask(todo.id)}
                />
            ))}
        </div>
    );
}

export default Home;
