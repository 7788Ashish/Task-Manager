import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ title: task.title, description: task.description });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    // Reset the updated task to the original task data
    setUpdatedTask({ title: task.title, description: task.description });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding property in the updatedTask state
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the updated task data to the parent component (TaskList) for editing
    onEdit(task._id, updatedTask);
    // Exit edit mode
    setEditing(false);
  };

  return (
    <li className="bg-gray-100 p-2 rounded-md mb-2">
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
            className="block border border-gray-400 p-1 mb-1"
          />
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
            className="block border border-gray-400 p-1 mb-1"
          ></textarea>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
          <button type="button" onClick={handleCancelEdit} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm">{task.description}</p>
          <div className="mt-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleEdit}>
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => onDelete(task._id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
