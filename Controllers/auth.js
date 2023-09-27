const User = require('../Models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// Register
exports.register = async (req, res) => {
    try {
        // code
        // 1.เช็คยูเซอว่ามีรึยังห้ามซ้ำ CheckUser 
        const { name, password } = req.body
        var user = await User.findOne({ name })
        if (user) {
            return res.send('User alredy Exists!!').status(400)
        }
        // 2.กำหนดให้ใช้รหัสเสมอ Encrypt
        const slat = await bcrypt.genSalt(10)
        user = new User({name,password })
        user.password = await bcrypt.hash(password, slat)
        // 3.เซฟลงไปในฐานข้อมูล Save
        await user.save()
        res.send('Register Success!')
    } catch (err) {
        // code
        console.log(err);
        res.status(500).send('server Error')
    }
},


    //  LOGIN
    exports.login = async (req, res) => {
        try {
            // code
            // 1.Check User เช็คยูเซอว่าถูกมั้ย
            const { name, password } = req.body
            var user = await User.findOneAndUpdete({ name }, { new: ture })
            console.log(user)
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    return res.status(400).send('Password invlid')
                }
                // 2.Payload เตรียมส่งข้อมูลกลับไปหน้าบ้าน
                var payload = {
                    user: {
                        name: user.name
                    }
                }
                // 3.Generate สร้างโทเคนให้หน้าบ้านเข้ามาในระบบ
                jwt.sign(payload, 'jwtsecret', { expiresIn: 60 }, (err, token) => {
                    if (err) throw err;
                    res.json({ token, payload })
                })
            }else{
                return res.status(400).send('ไม่มีนะ')
            }
        } catch (err) {
            // code
            console.log(err);
            res.status(500).send('server Error')
        }
    }