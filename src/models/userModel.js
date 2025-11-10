import pool from "../config/db.js";

export const getAllUsersService = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const createUserService = async (username, email) => {
  const result = await pool.query(
    "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
    [username, email]
  );
  return result.rows[0];
};

export const getUserByIdService = async (user_id) => {
  const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [
    user_id,
  ]);
  return result.rows[0];
};

export const updateUserService = async (username, email, user_id) => {
  const result = await pool.query(
    "UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING *",
    [username, email, user_id]
  );
  return result.rows[0];
};

export const deleteUserService = async (user_id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE user_id = $1 RETURNING *",
    [user_id]
  );
  return result.rows[0];
};
