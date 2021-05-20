import { generateConnection } from '../database/connection';

export const createUser = async (name, email, password) => {
    try {
        const connection = generateConnection();
        await connection.connect();
        await connection.query('insert into users (name, email, password) values ($1, $2, $3)', [name, email, password]);
        await connection.end();
    } catch(error) {
        console.error(error);
        await connection.end();
    }
}

export const findUser = async (usuario) => {
    try {
        const connection = generateConnection();
        await connection.connect();
        const result = await connection.query('select * from users where name = $1', [usuario]);
        await connection.end();
        return result.rows[0];
    } catch(error) {
        console.error(error);
        await connection.end();
    }
}

export const getCreatedAt = async (usuario) => {
    try {
        const connection = generateConnection();
        await connection.connect();
        const result = await connection.query('select created_at from users where name = $1', [usuario]);
        await connection.end();
        return result.rows[0];
    } catch(error) {
        console.error(error);
        await connection.end();
    }
}

export const updateUser = async (id, password) => {
    try {
        const connection = generateConnection();
        await connection.connect();
        await connection.query('update users set password = $1 where id = $2', [password, id]);
        await connection.end();
    } catch(error) {
        console.error(error);
    }
}

export const setTempPassword = async (id, tempPass) => {
    try {
        const connection = generateConnection();
        await connection.connect();
        await connection.query('update users set tempPassword = $1 where id = $2', [tempPass, id]);
        await connection.end();
    } catch(error) {
        console.error(error);
    }
}