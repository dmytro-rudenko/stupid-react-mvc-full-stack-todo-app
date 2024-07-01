// src/controllers/TodoController.ts
import { Request, Response } from 'express';
import TodoModel from '../models/todo.model';

class TodoController {
  static async getAll(req: Request, res: Response): Promise<void> {
    const todos = await TodoModel.getAll();
    res.json(todos);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const todo = await TodoModel.getById(parseInt(req.params.id));

    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }

    res.json(todo);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const newTodo = await TodoModel.create(req.body);
    res.status(201).json(newTodo);
  }

  static async update(req: Request, res: Response): Promise<void> {
    const todo = await TodoModel.getById(parseInt(req.params.id));

    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }

    await TodoModel.update(parseInt(req.params.id), req.body);
    res.sendStatus(204);
  }

  static async delete(req: Request, res: Response): Promise<void> {
    const todo = await TodoModel.getById(parseInt(req.params.id));

    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }

    await TodoModel.delete(parseInt(req.params.id));
    res.sendStatus(204);
  }
}

export default TodoController;