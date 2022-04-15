import { useState } from "react";
import { AddArea } from "../../components/addArea";
import "./style.css";
import { ListAdd } from "../../components/listAdd";

function Home() {
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
    }

    return (
        <div className="home">
            <h1>TodoWeb</h1>
            <AddArea onEnter={addTask} />
            {itemtask.map((todo, index) => (
                <ListAdd key={index} item={todo} onChange={handleTaskChange} />
            ))}
        </div>
    );
}

export default Home;
