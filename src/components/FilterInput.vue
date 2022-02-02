<template>
    <div class="filter-input">
       <select v-model="val" name="regions" id="regions">
        <option value="" class="default-option" selected disabled hidden>Filter by Region</option>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="antarctic">Antarctic</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
     </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 name: "FilterInput",
 data(){
     return{
       val: "" as string
     }
 },
 watch:{
     val: function(_val: string){
      this.$emit('value', _val);
     }
 }

})
</script>

<style lang="scss">

.filter-input{
  width: 200px;
  height: 46px;
  box-shadow: var(--shadow);
  background: var(--WhiteDarkTextAndLightElements);
  border-radius: 4px;
  overflow: hidden;

  select{
    width: inherit;
    height: inherit;
    border: none;
    padding: 0px 12px;
    background: transparent;
    cursor: pointer;
    color: var(--DarkText);
   &:focus{
     outline: none;
   }
   option{
     padding: 6px 0px;
     background: var(--WhiteDarkTextAndLightElements);
   }
  }
}

</style>