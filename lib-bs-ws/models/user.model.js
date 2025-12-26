
const db =require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT id, username FROM users');
return rows;
};

exports.create = async (data) => {
    const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', 
        [data.username, data.password]);
    return result.insertId;
};

exports.update = async (data) => {
    await db.query('UPDATE users SET username = ? WHERE id = ?',
        [data.username, data.id]);
};

exports.delete = async (id) => {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
};