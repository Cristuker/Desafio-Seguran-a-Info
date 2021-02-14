import { createDb, migrate } from "postgres-migrations"
import { resolve } from 'path';

async function runMigrations() {
  const dbConfig = {
    database: "postgres",
    user: "postgres",
    password: "sEg#1234@!",
    host: "localhost",
    port: 5432,
  }

  await createDb('postgres', {
    ...dbConfig,
    defaultDatabase: "postgres", // defaults to "postgres"
  });
  console.log('Iniciando migrations');
  await migrate(dbConfig, resolve('src','app', 'database', 'migrations'))
  console.log('Fim das migrations');
}

runMigrations()