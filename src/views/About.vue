<template>
  <div class="about">
  <div class="back-home">
       <router-link to="/" class="back-link"> <span> <i class="fa fa-long-arrow-left"></i></span>  Back</router-link>
  </div>
   <div class="country-detail">
     <Loading />
      <DetailCard v-if="!loading && countryDetail" :countryDetail="countryDetail" />
    <Error />
   </div>
  </div>
</template>


<script lang="ts">
import DetailCard   from '@/components/DetailCard.vue';
import { defineComponent} from 'vue';
import Loading from '@/components/Loading.vue'
import Error from '@/components/Error.vue'

export default defineComponent({
 name: 'App',
 components: {
   DetailCard,
   Loading,
   Error
 },
 data(){
    return{
    paramId : this.$route.params.id as string
 }},
 created: function(){
   this.$store.dispatch('getCountry', {"urlParam" : this.paramId});
 },
 watch:{
    $route (to){
      if(to.params.id){
       this.$store.dispatch('getCountry', {"urlParam" : to.params.id});
      }
    }
 },
computed:{
  loading(){
    return this.$store.state.loading;
  },
   countryDetail(){
     return this.$store.state.countryData[0];
   }
 }
})

</script>

<style lang="scss">
.about{
  padding: 0px 22px;
}
.country-detail{
  font-size: 16px;
}
.back-home{
  width: 120px;
  box-shadow: var(--shadow);
  font-weight: 600;
  margin: 50px 0px;
  transition: .2s ease-in;
  a{
    display: block;
    padding: 8px 12px;
    text-decoration: none;
    text-align: center;
    color: var(--DarkText);
    background: var(--WhiteDarkTextAndLightElements);
    span{
        i{
          margin-right: 6px;
        }
    }
  }
  &:hover{
     box-shadow: var(--shadowHover);
  }
}


@media screen and (max-width:600px) {
  .about{
  padding: 0px;
  }

}

</style>