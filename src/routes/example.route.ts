import { Router } from "express"
const router = Router()

import { example } from "../controllers/example.controller.js";

router.get("/example", example)

export default router