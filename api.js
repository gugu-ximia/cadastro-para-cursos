import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

let ultimoID = 1;

const alunoCadastrado = {
    id: ultimoID,
    nome: '',
    rg: '',
    cpf: '',
    dataNascimento: '',
    endereco: '',
    numero: '',
    bairro: '',
    municipio: '',
    uf: '',
    telefoneFixo: '',
    telefone: '',
    email: '',
    curso: '',
    dataEntrega: ''
};

let alunos = [alunoCadastrado];

// PEGAR ALUNOS
app.get('/alunos', (req, res) => {
    res.json(alunos).status(200);
})

// CRIAR ALUNOS
app.post('/alunos', (req, res) => {
    const { nome, rg, cpf, dataNascimento, endereco, bairro, municipio, uf, telefoneFixo, telefone, email, curso } = req.body;

    if (!nome || !rg || !cpf || !dataNascimento || !endereco || !bairro || !municipio || !uf || !telefone || !email || !curso) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' });
    }

    const novoAluno = {
        id: ++ultimoID, // já incrementa aqui
        nome,
        rg,
        cpf,
        dataNascimento,
        endereco,
        bairro,
        municipio,
        uf,
        telefoneFixo,
        telefone,
        email,
        curso,
        dataEntrega: ''
    };

    alunos.push(novoAluno);

    res.status(201).json(novoAluno); // retorna o novo aluno em vez de {}
});


app.listen(3000);