import { Request, Response } from "express";

class CommentsController {
  async get(req: Request, res: Response) {
    res.send("teste");
  }
}

export default new CommentsController();
