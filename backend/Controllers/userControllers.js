import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "failed to update user" });
  }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params; // Extracting the user id from the request parameters
  
    try {
      const deleteUser = await User.findByIdAndDelete(id);
      if (!deleteUser) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete user",
      });
    }
  };
  


export const getSingleUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await User.findById(id).select("-password");
  
      res.status(200).json({
        success: true,
        message: "User Found",
        data: user,
      });
    } catch (err) {
      res.status(404).json({ status: false, message: "no user found" });
    }
  };
  
  export const getAllUser = async (req, res) => {
    try {
      const users = await User.find({}).select("-password");
  
      res.status(200).json({
        success: true,
        message: "Users FOund",
        data: users,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        message: "no found",
      });
    }
  };