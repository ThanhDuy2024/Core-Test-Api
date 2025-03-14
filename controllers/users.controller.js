const Account = require('../models/accounts.model');
const randomToken = require('../helpers/randomToken');
module.exports.users = async (req, res) => {
    const find = {
        deleted: false
    }
    const accounts = await Account.find(find);
    res.send(accounts);
}

module.exports.register = async (req, res) => {
    try {
        const emailExits = await Account.findOne({email: req.body.email});
        if(emailExits) {
            return res.status(400).json({ message: "User already exists" });
        }
        req.body.token = randomToken.generateString(20);
        const newUser = new Account(req.body);
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const emailCheck = await Account.findOne({ email: email });

        if (!emailCheck) {
            return res.status(404).json({ message: "Email or password not found" });
        }

        if (emailCheck.password !== password) { // Use strict comparison !==
            return res.status(404).json({ message: "Email or password not found" });
        }

        return res.json({ 
            email: emailCheck.email, password: emailCheck.password, token: emailCheck.token 
        });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports.me = async (req, res) => {

    const { token } = req.body
    const tokenUser = await Account.findOne({token: token});
    if(!tokenUser) {
        return res.status(404).json({message: "token not found"})
    }

    res.status(201).json({message: "intial has done", user: {fullName: tokenUser.fullName}});
}
