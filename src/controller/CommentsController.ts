import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Comment } from "../entity/Comment";

class CommentsController {
  async get(req: Request, res: Response) {
    const allComments = await AppDataSource.manager.find(Comment, {});
    res.send(allComments);
  }

  async post(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const comment = new Comment();
      comment.name = name;
      comment.description = description;

      await AppDataSource.manager.save(comment);
      res.send(comment);
    } catch (e) {
      res.status(404).send(e);
    }
  }
}

export default new CommentsController();
