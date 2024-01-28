import React from "react";

const UpdateForm = ({ updateData, changeTask, cancelUpdate, updateTask }) => {
  return (
    <>
      <div className="update-container">
        <input
          type="text"
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
        />
        <button onClick={updateTask}>Update</button>
        <button onClick={cancelUpdate} className="cancel">
          Cancel
        </button>
      </div>
    </>
  );
};

export default UpdateForm;
