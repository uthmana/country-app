import { Store } from 'vuex'
import ICountry from '@/types/country';
import ICountryDetail from '@/types/Detail';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number,
    allCountry: Array<ICountry>,
    countryData: Array<ICountryDetail>
    loading: boolean,
    errorMsg: string
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}