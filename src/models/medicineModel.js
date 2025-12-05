import pool from "../config/db.js";

export const getAllMedicinesService = async () => {
  const result = await pool.query("SELECT * FROM medicines");
  return result.rows;
};

export const createMedicineService = async (
  medicine_name,
  quantity,
  expiration_date,
  user_id
) => {
  const result = await pool.query(
    "INSERT INTO medicines (medicine_name, quantity, expiration_date, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [medicine_name, quantity, expiration_date, user_id]
  );
  return result.rows[0];
};

export const getMedicineByIdService = async (medicine_id) => {
  const result = await pool.query(
    "SELECT * FROM medicines where medicine_id = $1",
    [medicine_id]
  );
  return result.rows[0];
};

export const updateMedicineService = async (
  medicine_name,
  quantity,
  expiration_date,
  medicine_id
) => {
  const result = await pool.query(
    "UPDATE medicines SET medicine_name = $1, quantity = $2, expiration_date = $3 WHERE medicineID = $4 RETURNING *",
    [medicine_name, quantity, expiration_date, medicine_id]
  );
  return result.rows[0];
};

export const deleteMedicineService = async (medicine_id) => {
  const result = await pool.query(
    "DELETE FROM medicines WHERE medicine_id = $1 RETURNING *",
    [medicine_id]
  );
  return result.rows[0];
};
