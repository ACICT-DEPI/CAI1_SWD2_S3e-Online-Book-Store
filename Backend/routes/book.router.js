import express from "express";
import {
  getAllBooks,
  getAuthorBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import { authorRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/author-books", protectRoute, authorRoute, getAuthorBooks);
router.post("/", protectRoute, authorRoute, createBook);
router.put("/:id", protectRoute, authorRoute, updateBook);
router.delete("/:id", protectRoute, authorRoute, deleteBook);

export default router;
