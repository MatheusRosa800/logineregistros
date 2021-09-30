var mongoose = require('mongoose')

var conexao =()=>{
    mongoose.connect('mongodb+srv://registroUser:matheusrosa@fiapcluster.prnks.mongodb.net/login_registro?retryWrites=true&w=majority')
}

module.exports = conexao