export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/todo.db'
    },
    useNullAsDefault: true
  }
};