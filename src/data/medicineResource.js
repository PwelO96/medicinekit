const MedicineResource = (medicine) => {
  if (!medicine) return null;
  return {
    name: medicine.medicine_name,
    quantity: medicine.quantity,
    endDate: medicine.expiration_date,
  };
};

MedicineResource.collection = (medicines) => medicines.map(MedicineResource);

export default MedicineResource;
