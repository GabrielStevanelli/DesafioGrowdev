import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entity/Contact";

class ContactsController {
  async get(req: Request, res: Response) {
    const contacts = await AppDataSource.manager.find(Contact, {});
    res.send(contacts);
  }

  async post(req: Request, res: Response) {
    try {
      const { name, description, email, phone } = req.body;
      const contactDescription = new Contact();
      contactDescription.name = name;
      contactDescription.description = description;
      contactDescription.email = email;
      contactDescription.phone = phone;

      await AppDataSource.manager.save(contactDescription);
      res.send(contactDescription);
    } catch (e) {
      res.status(404).send(e);
    }
  }
}

export default new ContactsController();
