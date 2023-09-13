const Productx = require('../Models/Productx')

exports.read = async(req,res)=>{
    res.send('Hello Controllres Read')
}

exports.list = async(req,res)=>{
    try{
        res.send('hello list')
    }catch(error){
        console.log(error)
        res.status(500).send('server error')
    }
}
exports.create = async(req,res)=>{
    try{
        // code
        console.log(req.body)





        res.send("OK?")
    }catch(error){
        console.log(error)
        res.status(500).send('server error')
    }
}
exports.update = async(req,res)=>{
    try{
        res.send('hello update')
    }catch(error){
        console.log(error)
        res.status(500).send('server error')
    }
}
exports.remove = async(req,res)=>{
    try{
        res.send('hello remove')
    }catch(error){
        console.log(error)
        res.status(500).send('server error')
    }
}