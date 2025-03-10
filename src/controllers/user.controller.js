
import { createUserService, getAllUsersService, updateUserService } from '../models/user.model.js';

const handleResponse = (res, status, message, data=null)=>{
    res.status(status).json({
        status, 
        message,
        data,
    });
}



export const getAllUsers = async (req, res, next) => {
    try {
        const users= await getAllUsersService();
        handleResponse(res, 200, "User fetched Successfully", users)
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User fetched Successfully", user)
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const { name, email } = req.body;
       const newUser = await createUserService(name, email);
        handleResponse(res, 201, "User Created Successfully", newUser)
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const updatedUser = await updateUserService(req.params.id, name, email);
        if (!updatedUser) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User updated Successfully", updatedUser);
    } catch (error) {
        next(error);
    }
};


export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await deleteUserService(req.params.id);
        if (!deletedUser) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User deleted Successfully", deletedUser);
    } catch (error) {
        next(error);
    }
};
