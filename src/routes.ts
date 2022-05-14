import { Router } from "express";
import CommentsController from "./controller/CommentsController";

const router = Router();

router.get("/rota", CommentsController.get);
router.post("/rota", CommentsController.post);

export default router;
