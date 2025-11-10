import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../models/userModel.js";

const handlerResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const newUser = await createUserService(username, email);
    handlerResponse(res, 201, "User created succesfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await getAllUsersService();
    handlerResponse(res, 200, "All users fetched succesfully", allUsers);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userResult = await getUserByIdService(req.params.id);
    if (!userResult) return handlerResponse(res, 404, "User not found");
    handlerResponse(res, 200, "User data", userResult);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const userUpdate = await updateUserService(username, email, req.params.id);
    handlerResponse(res, 201, "User updated succesfully", userUpdate);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUserService(req.params.id);
    if (!deletedUser) return handlerResponse(res, 404, "User not found");
    handlerResponse(res, 200, "User deleted succesfully", deleteUser);
  } catch (err) {
    next(err);
  }
};
