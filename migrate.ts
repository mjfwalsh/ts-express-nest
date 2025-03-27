// Configuration file example for ts-migrate-mongoose:
// You can also use .env instead of a config file

const msg: string = "Hello World";

console.log(msg);

export default {
  uri: process.env.MIGRATE_MONGO_URI ?? 'mongodb://localhost:27017/nest',
  // "collection": "migrations",
  // "migrationsPath": "./migrations",
  // "templatePath": "./migrations/template.ts",
  // "autosync": false
};
