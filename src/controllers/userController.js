import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../models/userModel.js";

import UserResource from "../data/userResource.js";

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
    const formattedNewUser = UserResource(newUser);
    handlerResponse(res, 201, "User created succesfully", formattedNewUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await getAllUsersService();
    const formattedNewUsers = UserResource.collection(allUsers);
    handlerResponse(
      res,
      200,
      "All users fetched succesfully",
      formattedNewUsers
    );
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userResult = await getUserByIdService(req.params.id);
    const formattedUserResult = UserResource(userResult);
    if (!userResult) return handlerResponse(res, 404, "User not found");
    handlerResponse(res, 200, "User data", formattedUserResult);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const userUpdate = await updateUserService(username, email, req.params.id);
    const formattedUserUpdate = UserResource(userUpdate);
    handlerResponse(res, 201, "User updated succesfully", formattedUserUpdate);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUserService(req.params.id);
    if (!deletedUser) return handlerResponse(res, 404, "User not found");
    handlerResponse(res, 200, "User deleted succesfully");
  } catch (err) {
    next(err);
  }
};
