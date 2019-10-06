const { Schema, model} = require('mongoose'); // utilizado um recurso do JS - desestruturação.
                                             // seria uma forma mais fácil de importar dependências de um objeto.
const DevSchema = new Schema({  // referece ao tipo de estrutura da tabela no banco de dados p/ armazenar um desenvolvedor la dentro.
    name: {
        type: String,
        required: true, // para elementos obrigatórios.
    },
    user:{
        type: String,
        required: true,
    },
    bio: String,
    avatar:{
        type: String,
        required: true,
    },

}, {
    timestamps: true, // o timestamps irá criar uma coluna de forma automática, sempre que houver um cadastro de um new desenvolvedor. Chamada 'createdAt'
});                   // e também outra tabela chamada 'updatedAt', essa irá atualizar a data da ultima alteração deste registro.       

module.exports = model('Dev', DevSchema);