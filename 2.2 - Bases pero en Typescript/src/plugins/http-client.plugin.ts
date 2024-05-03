import axios from 'axios';

export const httpClientPlugin = {
  
  get: async(url:string)  => {
    //se puede hacer tambien const { data } = await axios.get(url);
    const response = await axios.get( url );
    return response.data;
  },
  post: async(url:string, data:string) => {
    
  },
  put: async(url:string, data:string) => {
    
  },
  delete: async(url:string) => {
    
  },
  
}
