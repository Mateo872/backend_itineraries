import { Router } from "express";

import {
  login,
  createUser,
  getUsers,
  getUser,
  editUser,
} from "../controllers/users.controllers";

const router = Router();

router.route("/users").get(getUsers).post(login);

router.route("/users/new").post(createUser);

router.route("/users/:id").get(getUser).put(editUser);

export default router;
