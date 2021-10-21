module.exports = (app)=>{
    
    var conexao = require("../config/database.js")()
    var usuarios = require("../models/usuarios")
    
    app.get('/dashboard',async(req,res)=>{
        var id = req.query.id
        console.log|(id)
        if(!id){
            res.redirect('/login')
        }else{
            var userexiste = await usuarios.finOne({_id:id})
            if(userexiste){
                res.render('dashboard.ejs', {login:userexiste})
            }else{
                res.redirect("/login")
            }    
        }
     })

}
