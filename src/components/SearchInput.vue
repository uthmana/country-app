<template>
     <form class="search-input" @click.prevent="getCountry(searchText)">
         <input type="text" v-model="searchText" placeholder="Search for country..."  />
         <button class="search-btn" type="submit" @click.prevent="getCountry(searchText)"><i class="fa fa-search"></i></button>
     </form>
</template>

<script lang="ts">
import { defineComponent} from 'vue';


export default defineComponent({
  name: 'SearchInput',
  data(){
    return{
        searchText : "" as string
    }
  },
  computed:{

  },
  watch:{
     searchText :function (_qry: string){
       this.$emit('onSearchText', _qry);
     }
   },
   methods:{
     getCountry(_qry: string){
       this.$emit('onGetCountry', _qry);
     }
   }
});
</script>

<style lang="scss">


.search-input{
  width: 300px;
  position: relative;
   box-shadow: var(--shadow);
  background: var(--WhiteDarkTextAndLightElements);
  border-radius: 4px;
  overflow: hidden;
  button{
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(0%, -50%);
  height: inherit;
  cursor: pointer;
  background: none;
  border: none;
  height: 100%;
  i{
    color: #ccc;
  }
   }
 input{
  width: 100%;
  height: 46px;
  border: none;
  font-size: 18px;
  padding: 6px 12px 6px 48px;
  color: var(--DarkText);
  background: transparent;
  &:focus{
    outline: none;
  }
  &::placeholder{
    font-size: 16px;

  }
}

}

@media screen and (max-width: 600px) {
.search-input {
  width: 100%;
    margin-bottom: 40px;
}
}


</style>