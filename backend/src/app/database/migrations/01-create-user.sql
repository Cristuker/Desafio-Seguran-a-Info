CREATE TABLE IF NOT EXISTS users(
    id serial,
    name varchar(100), 
    email varchar(100),
    password varchar(100),
    tempPassword varchar(100),
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    CONSTRAINT id_unq UNIQUE (id)
);