 
 <template>
  <div class="card-large" v-if="countryDetail">
   <img :src="countryDetail.flag" :alt="countryDetail.name">
   <div class="detail-info">
    <h2>{{countryDetail.name}}</h2>
     
     <div class="detail-list">
     <ul>
        <li><span class="country-item">Native Name</span> <span class="country-value">: {{countryDetail.nativeName}}</span></li>
        <li><span class="country-item">Population</span> <span class="country-value">: {{countryDetail.population}}</span></li>
        <li><span class="country-item">Region</span> <span class="country-value">: {{countryDetail.region}}</span></li>
        <li><span class="country-item">Sub Region</span> <span class="country-value">: {{countryDetail.subRegion}}</span></li>
        <li><span class="country-item">Capital</span> <span class="country-value">: {{countryDetail.capital}}</span></li>
     </ul>

    <ul>
        <li><span class="country-item">Top Level Domain</span> <span class="country-value">: {{countryDetail.topLevelDomain}}</span></li>
        <li><span class="country-item">Currencies</span>: <span class="country-value" v-for="(currency, dx) in countryDetail.currencies" :key="dx"> {{currency.name + ". "}} </span></li>
        <li><span class="country-item">Languages</span> : <span class="country-value" v-for="(lang, idx) in countryDetail.language" :key="idx"> {{lang}}. </span></li>
    </ul>

     </div>
     <div class="detail-border">
        <span class="country-item">Border Countries: </span>
         <span class="country-value-button">
             <router-link v-for="(border, index) in countryDetail.boderCountry" :key="index" :to="setLink(border)">{{border}}</router-link>
         </span>
     </div>
   </div>

  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ICountryDetail from '@/types/Detail';


export default defineComponent({
  name: 'DetailCard',
  props: {
    countryDetail: {
      required: true,
      type: Object as PropType<ICountryDetail>
    },
  },
  methods:{
      setLink(str:string){
          return { name: 'About', params: { id: str}}
      }
  }
});
</script>

<style  lang="scss">

.card-large{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: var(--DarkText);
    img{
        width: 50%;
        height: fit-content;
      
    }
}

.detail-info{
    width: 50%;
    padding: 20px 0px 20px 40px;
}


.detail-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
    ul{
     list-style: none;
     padding:0;
     li{
     margin-bottom: 6px;
     }
    }
}
.country-item{
font-size: 16px;
   font-weight: 600;
}

.detail-border{
    display: flex;
    flex-wrap: wrap;

    .country-item{
        margin-right: 16px;
        margin-bottom: 12px;
    }
}

.country-value-button{
    display: flex;
    flex-wrap: wrap;
 
    a{
        margin-right: 12px;
        margin-bottom: 1rem;
        padding: 6px 12px;
        border: none;
        box-shadow: var(--shadow);
        background: none;
        text-decoration: none;
        background: var(--WhiteDarkTextAndLightElements);
        color: var(--DarkText);
        transition: .2s ease-in;
        &:hover{
          box-shadow: var(--shadowHover);
        }
    }
}



@media screen and (max-width: 600px) {
    .card-large{
    justify-content: center;
    flex-wrap: wrap;
    img{
        width: 100%;
    }
}

.detail-info{
    width: 100%;
    padding: 0;
}

.detail-list{
    display: flex;
   flex-direction: column;
    ul{
     list-style: none;
     padding:0;
     li{
     margin-bottom: 6px;
     }
    }
}


}

</style>
