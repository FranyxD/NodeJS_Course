const httpClientPlugin = {
  
  get: async(url)  => {
    const response = await fetch( url );
    return await response.json();
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