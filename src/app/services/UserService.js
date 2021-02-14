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

export const findUser = async (email) => {
    try {
        connection.connect();
        const result = await connection.query('select * from users where email = $1', [email]);
        await connection.end();
        return result.rows[0];
    } catch(error) {
        console.error(error);
    }
}

export const updateUser = async(id, password) => {
    try {
        connection.connect();
        await connection.query('update users set password = $1 where id = $2', [password, id]);
        await connection.end();
    } catch(error) {
        console.error(error);
    }
}