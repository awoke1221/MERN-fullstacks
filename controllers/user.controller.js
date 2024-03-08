const bcrypt = require('bcryptjs')
const user = require("../models/user")


const register = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new user({
            userName,
            email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ message: "user registered sucessfully!!!" })

    } catch {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })

    }

}



exports.register = register