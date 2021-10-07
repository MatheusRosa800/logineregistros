module.exports = (app)=>{
    //importar o bcrypt
    var bcrypt = require('bcrypt')

    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

app.post('/registro', async(req,res)=>{
    
    var conexao = require('../config/database')()
    var usuarios = require('../models/usuarios')

     var userexiste = await usuarios.findOne({email:req.body.email})
    if(userexiste){
        return res.send('email ja cadastrado')
    }else{
        var senhasegura = await bcrypt.hash(req.body.senha,12)
        var documentos = new usuarios({
            nome:req.body.nome,
            email:req.body.email,
            senha:senhasegura

        }).save()
        res.render('login.ejs')
        }
    })

}