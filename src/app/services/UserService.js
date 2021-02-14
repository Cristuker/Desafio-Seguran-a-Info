import { connection } from '../database/connection';

export const createUser = async (name, email, password) => {
    try {
        connection.connect();
        await connection.query('insert into users (name, email, password) values ($1, $2, $3)', [name, email, password]);
        await connection.end();
    } catch(error) {
        console.error(error);
    }

}