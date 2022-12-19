import pg from 'pg';

type params = number | string

const pool = new pg.Pool({ connectionString: process.env.CONNECTION_STRING})

export const query = (text: string, params?: params[] ) => pool.query(text, params)