const axios = require('axios');

module.exports = {
    async store(req, res){
        const response = await axios.get('https://smarts-totem.s3-sa-east-1.amazonaws.com/code-challenge/customers.json');
        return res.json(response.data);
    }
}