import db from '../db/knex';

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
  created_at?: Date;
  updated_at?: Date;
}

class TodoModel {
  static async getAll(): Promise<Todo[]> {
    return db('todos').select('*');
  }

  static async getById(id: number): Promise<Todo> {
    return db('todos').where({ id }).first();
  }

  static async create(todo: Todo): Promise<Todo> {
    const [newTodo] = await db('todos').insert(todo).returning('*');
    return newTodo;
  }

  static async update(id: number, todo: Partial<Todo>): Promise<void> {
    await db('todos').where({ id }).update(todo);
  }

  static async delete(id: number): Promise<void> {
    await db('todos').where({ id }).del();
  }
}

export default TodoModel;