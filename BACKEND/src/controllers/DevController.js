/* RESPONSÁVEL POR RECEBER AS REQUISIÇÕES RECEBIDOS DAS ROTAS */

const axios = require('axios'); // instale o axios antes. yarn add axios.
const Dev = require('../models/Dev');

module.exports = {
     async store(req, res){
        // console.log(req.body.username);
       const { username } = req.body;

       const response = await axios.get(`https://api.github.com/users/${username}`); // referente a resposta que eu quero la da api usando o axios. O axios é assicrono, entap precisa colocar async na função.       

        const { name, bio, avatar_url:avatar } = resposta.data;

        const dev = await Dev.create({
            name,
            user:username,
            bio,
            avatar
        })
 
        return res.json(dev);
    }
};