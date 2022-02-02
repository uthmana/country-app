<template>
  <div class="card">
   <router-link :to="{ name: 'About', params: { id: country.id }}"></router-link>
    <img :src="country.flag" :alt="country.name"> 
    <div class="card-info">
      <h4 class="country"> {{country.name}}</h4>
      <ul>
         <li><span class="country-item">Population</span> <span class="country-value">: {{country.population}}</span></li>
         <li><span class="country-item">Region</span> <span class="country-value">: {{country.region}}</span></li>
        <li><span class="country-item">Capital</span> <span class="country-value">: {{country.capital}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ICountry from '@/types/country';


export default defineComponent({
  name: 'Card',
  props: {
    country: {
      required: true,
      type: Object as PropType<ICountry>
    },
  }
});
</script>

<style  lang="scss">

.card{
  width: 260px;
  overflow: hidden;
  margin: 30px 20px;
  border-radius: 6px;
  box-shadow: var(--shadow);
  background: var(--WhiteDarkTextAndLightElements);
  color: var(--DarkText);
  cursor: pointer;
  position: relative;
  a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  img{
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-bottom: 1px solid #cccccc4a;
  }
}

.card-info{
  padding: 20px 20px 30px 20px;
  h4{
    margin: 0 0 12px 0;
  }
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
  }

.country-item{
  font-weight: 600;
}

}

@media screen and (max-width: 600px) {
.card{
  margin: 10px 15px;
}

}




</style>
