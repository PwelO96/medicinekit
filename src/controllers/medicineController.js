import {
  createMedicineService,
  deleteMedicineService,
  getAllMedicinesService,
  getMedicineByIdService,
  updateMedicineService,
} from "../models/medicineModel.js";

import MedicineResource from "../data/medicineResource.js";

const handlerResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const getAllMedicines = async (req, res, next) => {
  try {
    const allMedicines = await getAllMedicinesService();
    const formattedMedicines = MedicineResource.collection(allMedicines);
    handlerResponse(
      res,
      200,
      "All medicines fetched succesfully",
      formattedMedicines
    );
  } catch (err) {
    next(err);
  }
};

export const createMedicine = async (req, res, next) => {
  const { medicine_name, quantity, expiration_date, user_id } = req.body;
  try {
    const newMedicine = await createMedicineService(
      medicine_name,
      quantity,
      expiration_date,
      user_id
    );
    const formattedNewMedicine = MedicineResource(newMedicine);
    handlerResponse(
      res,
      201,
      "Medicine created succesfully",
      formattedNewMedicine
    );
  } catch (err) {
    next(err);
  }
};

export const getMedicineById = async (req, res, next) => {
  try {
    const medicineResult = await getMedicineByIdService(req.params.id);
    const formattedMedicineResult = MedicineResource(medicineResult);
    if (!medicineResult) return handlerResponse(res, 404, "Medicine not found");
    handlerResponse(
      res,
      200,
      "Medicine fetched succesfully",
      formattedMedicineResult
    );
  } catch (err) {
    next(err);
  }
};

export const updateMedicine = async (req, res, next) => {
  const { medicine_name, quantity, expiration_date } = req.body;
  try {
    const medicineResult = await updateMedicineService(
      medicine_name,
      quantity,
      expiration_date,
      req.params.id
    );
    const formattedMedicineResult = MedicineResource(medicineResult);
    if (!medicineResult) return handlerResponse(res, 404, "Medicine not found");
    handlerResponse(
      res,
      201,
      "Medicine updated succesfully",
      formattedMedicineResult
    );
  } catch (err) {
    next(err);
  }
};

export const deleteMedicine = async (req, res, next) => {
  try {
    const deleteMedicine = await deleteMedicineService(req.params.id);
    if (!deleteMedicine) return handlerResponse(res, 404, "Medicine not found");
    handlerResponse(res, 200, "Medicine deleted succesfully");
  } catch (err) {
    next(err);
  }
};
