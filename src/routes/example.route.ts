import { Router } from "express"
const router = Router()

import { example } from "../controllers/example.controller.js";

router.post("/example", example)

export default router