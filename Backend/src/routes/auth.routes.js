const { Router } = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const authRouter = Router()

/**
 * @route POST /api/auth/login
 * @description Register a new user
 * @acess Public
 */

authRouter.post("/register", authController.registerUserController)


/**
 * @route POST /api/auth/login
 * @description Login a user
 * @acess Public
 */

authRouter.post("/login", authController.loginUserController)


/**
 * @route GET /api/auth/logout
 * @description Clear token from the user cookie and add token in the blackList
 * @acess Public
 */

authRouter.get("/logout", authController.logoutUserController)


/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @acess Private
 */

authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController)

module.exports = authRouter