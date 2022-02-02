import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import requestData  from "@/api/request";

import ICountry from '@/types/country';
import ICountryDetail from '@/types/Detail';

export interface IurlParams{
   urlParam: string
}


export interface State {
  allCountry: Array<ICountry>,
  countryData: Array<ICountryDetail>
  loading: boolean,
  errorMsg: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
      allCountry: [],
      countryData : [],
      loading: true,
      errorMsg : ''
  },
  mutations: {
    LOADING(state, data){
     state.loading = data;
    },
    ERROR(state, msg){
     state.errorMsg = msg;
    },
     GETALLCOUNTRY(state, data) {
        data.forEach((_d:any) => {
        const temp:ICountry = {} as ICountry;
        temp.id = _d.ccn3;
        temp.name = _d.name.official;
        temp.population = new Intl.NumberFormat().format(Number(_d.population));
        temp.region = _d.region;
        temp.capital = _d.capital ? _d.capital[0]: "";
        temp.flag = _d.flags.png;

        state.allCountry.push(temp); 
      });
    },

    GETCOUNTRY(state, data) {
     const _data = data[0];
     const temp :ICountryDetail = {} as ICountryDetail;
 
        state.countryData = [];

        temp.name = _data.name.official;
        temp.nativeName = _data.name.common;
        temp.population =  new Intl.NumberFormat().format(Number(_data.population));
        temp.region = _data.region;
        temp.subRegion = _data.subregion;
        temp.capital = _data.capital ? _data.capital[0]: "";
        temp.topLevelDomain = _data.tld ? _data.tld[0]: "";
        temp.flag = _data.flags.png ? _data.flags.png : _data.flags.svg;
        temp.currencies = _data.currencies ? Object.values(_data.currencies):  [];
        temp.language = _data.languages ?  Object.values(_data.languages): [];
        temp.boderCountry = _data.borders;
   
        state.countryData.push(temp); 
    }

  },
  actions: {
    async getAllCountry({ commit}, payload){
     const { data, status, message } = await requestData(payload.urlParam);
        if(status === 200){
          commit('GETALLCOUNTRY', data);
        }else{
            commit('ERROR', message);
        }
    },

    async getCountry({ commit}, payload){
     const { data, status, message } = await requestData(payload.urlParam);
        if(status === 200){
          commit('GETCOUNTRY', data);
        }else{
            commit('ERROR', message);
        }
    }

  },
  modules: {}
})
