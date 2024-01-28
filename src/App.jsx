import "./App.css";
import { useState } from "react";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState([{ id: 1, title: "Task 1", status: false }]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo([...todo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newtasks = todo.filter((task) => id !== task.id);
    setTodo(newtasks);
  };

  const markDone = (id) => {
    let newtask = todo.map((task) => {
      if (id === task.id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newtask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...todo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setTodo(updateObject);
    setUpdateData("");
  };

  return (
    <div className="container">
      <h2>Todo List App</h2>
      {updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}
          updateTask={updateTask}
        />
      ) : (
        <AddForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      )}

      {todo && todo.length ? "" : "No task"}
      <Todo
        todo={todo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
