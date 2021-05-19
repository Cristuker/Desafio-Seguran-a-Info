import { Client } from 'pg';
import { dbConfig } from '../config/dbConfig';

export const generateConnection = () => new Client({
    ...dbConfig
});
