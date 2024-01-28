import React from "react";

const AddForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <div className="addTask-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </>
  );
};

export default AddForm;
