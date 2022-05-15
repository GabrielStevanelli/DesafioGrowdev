import { Router } from "express";
import CommentsController from "./controller/CommentsController";
import ContactsController from "./controller/ContactsController";

const router = Router();

router.get("/comments", CommentsController.get);
router.post("/comment", CommentsController.post);

router.post("/contacts", ContactsController.post);

export default router;
