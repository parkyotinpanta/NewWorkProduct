
exports.auth = async (req,res,next)=>{
    try{
        // code
        const token = req.headers['authtoken']
        if(!token){
            return res.status(401).send('No TOKEN')
        }
        const decoded = jwt.verify(token,'jwtsecret')
        req.use = decoded.user
    
        next()
    } catch (err){
        // err
        console.log(err)
        return res.send('เอ่อเร่อ').status(500)
    }
}