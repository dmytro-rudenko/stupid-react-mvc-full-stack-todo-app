// src/routes/todoRoutes.ts
import { Router } from 'express';
import TodoController from '../controllers/todo.controller';

const router = Router();

router.get('/todos', TodoController.getAll);
router.get('/todos/:id', TodoController.getById);
router.post('/todos', TodoController.create);
router.put('/todos/:id', TodoController.update);
router.delete('/todos/:id', TodoController.delete);

export default router;