const Task = require('../models/Task');

// create a task
module.exports.createTask = async(req,res)=>{
    try {
     const task = new Task (req.body)
     await task.save();
     res.status(201).json(task)
    } catch (error) {
       console.log(error);
       res.status(400).json({
         message : "Error in creating task"
       })
    }
 }


 //Get all task
 module.exports.getallTask = async(req,res)=>{
    try{
       const task =await Task.find();
       res.status(200).json(task)
    }catch(error){
        console.log(error);
        res.status(400).json({
          message : "Error in getting task"
        })
    }

}
// Update task
module.exports.updateTask = async(req,res)=>{
  try {
      const taskID = req.params.id
      const task = await Task.findByIdAndUpdate(taskID,req.body)
      res.status(200).json({
          nessage : "Task updated successfully",
          updatedTask : task
      })
  } catch (error) {
      console.log(error);
      res.status(400).json({
          message : "Error in Updating task"
      })
  }
}

//Delete task
module.exports.deleteTask = async(req,res)=>{
  try {
      const taskID = req.params.id
      const task = await Task.findByIdAndDelete(taskID)
      res.status(200).json({
          nessage : "Task Deleted successfully",
          updatedTask : task
      })
  } catch (error) {
      console.log(error);
      res.status(400).json({
          message : "Error in deleting task"
      })
  }
}
