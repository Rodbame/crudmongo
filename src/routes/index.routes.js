import { Router } from "express";
import Task from "../models/Task";
import { renderIndex,addUser } from "../controllers/task.controller";

const router = Router();

router.get("/", renderIndex);

router.post("/task/add", addUser);

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
});

export default router;
