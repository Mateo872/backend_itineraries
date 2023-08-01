import { Router } from "express";

import {
  login,
  createUser,
  getUsers,
  getUser,
} from "../controllers/users.controllers";

const router = Router();

router.route("/users").get(getUsers).post(login);

router.route("/users/new").post(createUser);

router.route("/users/:id").get(getUser).put(getUser);

export default router;
