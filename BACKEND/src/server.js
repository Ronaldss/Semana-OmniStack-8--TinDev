const express = require('express'); // importando a biblioteca do express no node. 
                                    // o express é uma função que cria um novo servidor, 
                                    // uma new porta de entrada p/ receber requisições e enviar respostas.
const mongoose = require('mongoose'); // importando o ODM mongoose que foi instalado previamente pelo yarn: yarn add mongoose
const routes = require('./routes');


const server =  express();   // criando o servidor e chamando a função do express nele.

mongoose.connect('mongodb+srv://Ronald:suporte314159@cluster0-9vn0f.mongodb.net/meuBanco?retryWrites=true&w=majority', {
    useNewUrlParser: true
}); // tem que ser criado antes das rotas.

server.use(express.json()); // informando ou node que as requisições seram feitas em json.
server.use(routes);  // usar algum tipo de configuração que esteja em outro arquivo.
/* ESTA ROTA FOI COLOCADA NO ARQUIVO routes.json e está sendo chamado atraves deste comando acima.
server.get('/', (req, res) =>{
    //return res.send(`Conectado ao usuário: ${req.query.name}`);// chama o texto no body do html e ja estou usando o templat string do guanabara.
    return res.json({ message: `Conectado ao usuário: ${req.query.name}`}) // usando a mesma forma acima porem com o JSON no navegador.
});  // criando um tratamento para entender as requisições dos navegadores.
*/
server.listen(3333); // o servidor agora está escultando na porta 3333. só funciona com este tratamento acima.