// src/tests/todo.test.ts
import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from '../routes/todo.routes';
import db from '../db/knex';

const app = express();
app.use(bodyParser.json());
app.use('/api', todoRoutes);

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

afterAll(async () => {
    await db.destroy();
});

describe('Todo API', () => {
    it('should create a new todo', async () => {
        const response = await request(app)
            .post('/api/todos')
            .send({ title: 'Test Todo' });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Test Todo');
        expect(response.body.completed).toBe(0);
    });

    it('should get all todos', async () => {
        const response = await request(app).get('/api/todos');

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should get a todo by id', async () => {
        const todo = await request(app)
            .post('/api/todos')
            .send({ title: 'Another Test Todo' });

        const response = await request(app).get(`/api/todos/${todo.body.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Another Test Todo');
    });

    it('should update a todo', async () => {
        const todo = await request(app)
            .post('/api/todos')
            .send({ title: 'Update Test Todo' });

        const response = await request(app)
            .put(`/api/todos/${todo.body.id}`)
            .send({ title: 'Updated Test Todo', completed: true });

        expect(response.status).toBe(204);

        const updatedTodo = await request(app).get(`/api/todos/${todo.body.id}`);

        expect(updatedTodo.body.title).toBe('Updated Test Todo');
        expect(updatedTodo.body.completed).toBe(1);
    });

    it('should delete a todo', async () => {
        const todo = await request(app)
            .post('/api/todos')
            .send({ title: 'Delete Test Todo' });

        const response = await request(app).delete(`/api/todos/${todo.body.id}`);

        expect(response.status).toBe(204);

        const deletedTodo = await request(app).get(`/api/todos/${todo.body.id}`);

        expect(deletedTodo.status).toBe(404);
    });
});