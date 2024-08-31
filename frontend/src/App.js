import React from 'react'
import TaskList from './components/TaskList'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <TaskList/>
      <Toaster />
    </div>
  )
}

export default App;
