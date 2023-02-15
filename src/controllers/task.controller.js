import Task from "../models/Task";

export const renderIndex = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const addUser = async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
