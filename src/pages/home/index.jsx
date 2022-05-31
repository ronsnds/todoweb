import { useState } from "react";
import { AddArea } from "../../components/addArea";
import "./style.css";
import { ListAdd } from "../../components/listAdd";

function Home() {
  const [itemTask, setItemTask] = useState([]);

  function addTask(newTask) {
    const newList = {
      id: new Date(),
      task: newTask,
      done: false,
    };
    setItemTask(prevState => [...prevState, newList]);
  }

  function handleTaskChange(id, done) {
    let newList = [...itemTask];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setItemTask(newList);
  }

  function removeTask(index) {
    let filtered = itemTask.filter(i => i.id !== index);
    setItemTask(filtered);
  }

  return (
    <div className="home">
      <h1>TodoWeb</h1>
      <AddArea onEnter={addTask} />
      {itemTask.map((todo, index) => (
        <ListAdd
          key={index}
          done={todo.done}
          task={todo.task}
          onChange={e => handleTaskChange(todo.id, e.target.checked)}
          onClick={() => removeTask(todo.id)}
        />
      ))}
    </div>
  );
}

export default Home;
