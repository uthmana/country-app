
import ICountry from "@/types/country";
import { ref} from 'vue';

const useSearchQuery = () => {
 const search = ref("");


 let searchResult: Array<ICountry> = [];
 const getSearchQuery = (temp:string, data:Array<ICountry>): Array<ICountry> => {
   if(temp == "") return data;
    searchResult = data.filter((d:ICountry) =>{
        const str :string = (d.name).toLowerCase();
        return str.includes((temp).toLowerCase());
     })
    // console.log(searchResult);
     return searchResult;
  };
  return {search, searchResult, getSearchQuery};
};

export default useSearchQuery

