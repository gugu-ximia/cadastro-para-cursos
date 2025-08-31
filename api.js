import express from 'express';

const app = express();
app.use(express.json())

let ultimoID = 1;

const usuario_admin = {
    id: ultimoID,
    nome: 'admin',
    email: 'adimin@gmail.com',
};

let usuarios = [usuario_admin];

// PEGAR USUARIOS
app.get('/usuarios', (req, res) => {
    res.json(usuarios).status(200);
})

// CRIAR USUARIOS


app.listen(3000);