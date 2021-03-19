module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DB_HOST', '127.0.0.1'),
        port: env.int('DB_PORT', 5432),
        database: env('DB_NAME', ''),
        username: env('DB_USERNAME', ''),
        password: env('DB_PASSWORD', ''),
        ssl: env.bool('DB_SSL', false),
      },
      options: {}
    },
  },
});
