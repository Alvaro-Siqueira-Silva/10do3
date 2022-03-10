const conexao = require("../config/database")
const { app } = require("../config/servidor")

module.exports = (app)=>{
    var conexao = require('../config/database')
    var profs = require('../models/profs')


    app.get('/professor',(req,res)=>{
        conexao()
        profs.find()
        .then((profs)=>{
            res.render('professor.ejs',{dados:profs})
        })
        .catch((err)=>{
            console.log(err)
        })

    })


app.post('/professor',(req,res)=>{
    var infos = req.body
    conexao()


    var documento = new profs({
        nome:infos.nome,
        disciplina:infos.disciplina,
        turma:infos.turma,
        email:infos.email
    }).save()
    .then((result)=>{res.redirect('/professor')})
    .catch((err)=>{
        console.log(err)
    })
})
}