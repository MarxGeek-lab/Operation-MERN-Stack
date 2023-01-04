const express = require("express")
const { getUsers, 
    getUserById, 
    addUser, 
    updateUser, 
    deleteUser 
} = require("../controllers/UserController")

const router = express.Router()

router.get("/users", getUsers)
router.get("/users/:id", getUserById)
router.post("/user/add", addUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

module.exports = router;