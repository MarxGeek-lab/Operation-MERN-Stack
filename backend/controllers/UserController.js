const User =  require("../models/UserModel")

/* get all users */
const getUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
    } catch (error) {
        console.log(error)
    }
}

/* get user*/
const getUserById = async (req, res) => {
    try {
        const data = await User.findById(req.params.id)
        res.json(data)        
    } catch (error) {
        console.log(error)
    }
}

/* add user */
const addUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const insertUser = await user.save() 
        res.status(201).json(insertUser)
    } catch (error) {
        console.log(error)
        res.status(400).json("inserted failure")
    }
}

/* update user */
const updateUser = async (req, res) => {
    try {
        const updateUser = await User.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateUser)
    } catch (error) {
        console.log(error)
        res.status(400).json("update failure")
    }
}

/* delete user */
const deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({_id: req.params.id});
        res.status(200).json(deleteUser)
    } catch (error) {
        console.log(error)
        res.status(400).json("deleted failure")
    }
}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    addUser: addUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}