import { Router } from "express";

import {
  login,
  createUser,
  getUsers,
  getUser,
} from "../controllers/users.controllers";

const router = Router();

router.route("/users").get(getUsers).post(login);

router.route("/user/new").post(createUser);

router.route("/user/:id").get(getUser);

export default router;
