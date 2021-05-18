import { createDb, migrate } from "postgres-migrations"
import { resolve } from 'path';

import { dbConfig } from '../config/dbConfig'

async function runMigrations() {
  await createDb('postgres', {
    ...dbConfig,
    defaultDatabase: "postgres", // defaults to "postgres"
  });
  console.log('Iniciando migrations');
  await migrate(dbConfig, resolve('src','app', 'database', 'migrations'))
  console.log('Fim das migrations');
}

runMigrations()