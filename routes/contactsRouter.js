import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} from "../controllers/contactsControllers.js";

// import {
//   createContactSchema,
//   updateContactSchema,
// } from "../schemas/contactsSchemas.js";

// import validateBody from "../helpers/validateBody.js";

// const addMiddleware = validateBody(createContactSchema);
// const updateMiddleware = validateBody(updateContactSchema);

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", updateContact);

export default contactsRouter;
