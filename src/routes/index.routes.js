import { Router } from "express";//importar 

import {
  renderIndex,
  addUser,
  renderTaskEdit,
  editTask,
  deleteTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderIndex);

router.post("/task/add", addUser);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

export default router;
