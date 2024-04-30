const axios = require('axios');

const httpClientPlugin = {
  
  get: async(url)  => {
    //se puede hacer tambien const { data } = await axios.get(url);
    const {data} = await axios.get( url );
    return data;
  },
  post: async(url, data) => {
    
  },
  put: async(url, data) => {
    
  },
  delete: async(url) => {
    
  },
  
}

module.exports = {
  http: httpClientPlugin,
};