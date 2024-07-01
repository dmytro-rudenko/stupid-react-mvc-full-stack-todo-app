# Todo REST API

This is a simple Todo REST API built with Express.js and Knex.js for managing todo items. The API provides endpoints to create, read, update, and delete todo items.

## Prerequisites

- Node.js
- npm or yarn
- SQLite3

## Installation

1. Install dependencies:
   ```sh
   npm install
   ```

2. Set up the database:
   - Configure your database connection in the `knexfile.js` file.
   - Run the migrations:
     ```sh
     npx knex migrate:latest
     ```

## Running the API

1. Start the server:
   ```sh
   npm start
   ```

2. The API will be available at `http://localhost:3000/api`.

## API Endpoints

### Create a new todo

- **URL:** `/api/todos`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Test Todo"
  }
  ```
- **Response:**
  - **Status:** `201 Created`
  - **Body:**
    ```json
    {
      "id": 1,
      "title": "Test Todo",
      "completed": false
    }
    ```

### Get all todos

- **URL:** `/api/todos`
- **Method:** `GET`
- **Response:**
  - **Status:** `200 OK`
  - **Body:** Array of todos
    ```json
    [
      {
        "id": 1,
        "title": "Test Todo",
        "completed": false
      }
    ]
    ```

### Get a todo by ID

- **URL:** `/api/todos/:id`
- **Method:** `GET`
- **Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "id": 1,
      "title": "Test Todo",
      "completed": false
    }
    ```
  - **Status:** `404 Not Found` (if todo not found)

### Update a todo

- **URL:** `/api/todos/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "title": "Updated Test Todo",
    "completed": true
  }
  ```
- **Response:**
  - **Status:** `204 No Content`

### Delete a todo

- **URL:** `/api/todos/:id`
- **Method:** `DELETE`
- **Response:**
  - **Status:** `204 No Content`

## Testing

1. Run the tests:
   ```sh
   npm test
   ```

## License

This project is licensed under the MIT License.

---

Feel free to modify and enhance this README as needed to better fit your project's specifics.