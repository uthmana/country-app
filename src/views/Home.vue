<template>
  <div class="home">
   
   <div class="country-input">
      <SearchInput @onSearchText="onSearchItem"  @onGetCountry="onSearchSubmit" />
      <FilterInput @value="onFilter" />
   </div>

   <span class="result-count"> {{dataResult.length}} / {{allCountries.length}}</span>

   <div class="card-container">
        <Loading />
        <Card v-for="(country, index) in dataResult" :key={index} :country="country"/>
        <Error />
      <div class="noresult" v-if="dataResult.length == 0 && !this.$store.state.loading"> No Result Found ! </div>
   </div>

  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import Card from '@/components/Card.vue'
import FilterInput from '@/components/FilterInput.vue'
import SearchInput from '@/components/SearchInput.vue';
import useSearchQuery from '@/composables/useSearchQuery'
import useFilterQuery from '@/composables/useFilterQuery'
import Loading from '@/components/Loading.vue'
import Error from '@/components/Error.vue'
import ICountry from '@/types/country'


export default defineComponent({
  setup() {
   const { searchResult, getSearchQuery} = useSearchQuery();
   const { filterdResult, getFiltedData } = useFilterQuery();

  return{ 
          searchResult, 
          getSearchQuery,
          filterdResult, 
          getFiltedData
        }
  },

  name: 'Home',
  components: { 
    Card,
    Loading,
    Error,
    SearchInput,
    FilterInput
  },

  data(){
    return{
        dataResult : this.$store.state.allCountry as Array<ICountry>,
    }
  },
  created: function(){

    if(this.allCountries.length == 0 ){ 
      this.$store.dispatch('getAllCountry', {"urlParam" : "all"});
     }
  },
  computed:{
     allCountries: function(){
      return this.$store.state.allCountry;
    }
  },
   methods:{
     onFilter(txt: string){
       this.filterdResult = this.getFiltedData(txt, this.allCountries);
       this.dataResult =   this.filterdResult;
     },
     onSearchItem(txt: string){
        this.getSearchResult(txt);
     },
     onSearchSubmit(txt : string){
       if(txt && txt.length > 0) this.getSearchResult(txt);
     },
     getSearchResult(_qry: string){
         this.searchResult =  this.getSearchQuery(_qry, this.allCountries);
         this.dataResult = this.searchResult;
     }
   }
});
</script>

<style  lang="scss">
.card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content:  center;
}

.country-input{
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  margin: 50px 0px 30px 0px;

}

.result-count {
    padding: 0px 20px;
    width: 100%;
    text-align: left;
    font-size: 12px;
    color: var(--DarkText);
}


.noresult{
  margin-top: 100px;
  color: var(--DarkText);
}

@media screen and (max-width: 600px) {
.country-input{
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 20px;
  padding: 0;
}

}

</style>