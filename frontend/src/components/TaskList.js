// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import toast from 'react-hot-toast';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    // Fetch tasks from backend API
    fetch('http://localhost:8000/task')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);


  const handleDeleteTask = async (taskId) => {
    try {
      // Delete task from backend API
      await fetch(`http://localhost:8000/task/${taskId}`, {
        method: 'DELETE'
      });

      // Update tasks state after successful deletion
      setTasks(tasks.filter(task => task._id !== taskId));
      toast.success("Task Deleted Sucessfully");
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };


  const handleEditTask = async (taskId, updatedTaskData) => {
    try {
      // Update task on backend API
      await fetch(`http://localhost:8000/task/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTaskData) // Include updated task data in the request body
      });
  
      // Fetch updated tasks after editing
      const response = await fetch('http://localhost:8000/task'); // Use the same base URL for fetching tasks
      const data = await response.json();
      setTasks(data);
      toast.success("Task Updated Sucessfully")
    } catch (error) {
      console.log('Error editing task:', error);
    }
  };
  
  const handleAddTask = (newTask) => {
    // Update tasks state with the new task
    setTasks([...tasks, newTask]);
    toast.success("Task Added Sucessfully");
  };

  return (
    <div className="mt-4">
          <TaskForm onAddTask={handleAddTask} />
      <h2 className="text-lg font-bold mb-4">Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem task={task} onDelete={handleDeleteTask} onEdit={handleEditTask} />

        ))}
      </ul>
    </div>
  );
};

export default TaskList;