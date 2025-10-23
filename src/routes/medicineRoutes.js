import express from "express";

const router = express.Router();

router.get("/medicine", getAllMedicines);
router.post("/medicine", createMedicine);
router.get("/medicine/:id", getMedicineById);
router.put("/medicine/:id", updateMedicine);
router.delete("/medicine/:id", deleteMedicine);

export default router;
