
import axios from "axios";
import { store } from "@/store";

const rootUrl = "https://restcountries.com/v3.1/"

const setUrl = (str: string) : string =>{
  //  console.log(`${rootUrl}/alpha/${str}`);
 return str == "all" ?  `${rootUrl}${str}`: `${rootUrl}alpha/${str}`;
}

interface Response{
   data: Array<any>,
   message: string
   status: number,
}


export default  async function requestData(params: string) : Promise<Response>{  
    store.commit('LOADING', true);
    try {
      const data  = await axios.get<string, Response>(setUrl(params));
      store.commit('LOADING', false);
      return data;
    }
    catch(err:any) {
      store.commit('LOADING', false);
     
     // console.log(err.response.data);
      return err.response.data;
    }


 
}
