import ICountry from "@/types/country";
import { ref } from "vue";

 
 const useFilterQuery = () => {
  let filterdResult:Array<ICountry>= [];
  const filter = ref("");
 
  const getFiltedData = (filter: string, data:Array<ICountry>): Array<ICountry> => {
    filterdResult = data.filter((_d)=>{
       return (_d.region).toLowerCase() == filter;
    })
     return filterdResult;
   };

  return {filter, filterdResult, getFiltedData };
};



export default useFilterQuery;