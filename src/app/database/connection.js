import { Client } from 'pg';
import { dbConfig } from '../config/dbConfig';

export const connection = new Client({
    ...dbConfig
});
