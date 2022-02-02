<template>
  <button @click="toggleTheme" class="theme-switch"> 
    <span> <i :class="[isDarkTheme ? sunIcon  : moonIcon ]" aria-hidden="true"></i> </span>  
    <span class="mode-text"> {{ mode }} Mode</span> 
  </button>
</template>


<script lang="ts">
import { defineComponent} from 'vue';

export default defineComponent({

  name: 'ThemeSwitch',
  data(){
    return{
      moonIcon: 'fa fa-moon-o',
      sunIcon: 'fa fa-sun-o',
      isDarkTheme: false as boolean,
      mode: ' Light' as string
    }
  },
  created: function(){
     const theme =  localStorage.getItem('theme');
     if(theme) {
       if(theme == 'dark'){
          this.mode = ' Light';
          this.isDarkTheme = true;
          document.body.classList.add(theme);
       }
     }
  },
  methods:{
    toggleTheme(){
      if(document.body.classList.contains("dark")){
        this.isDarkTheme = false;
        this.mode = ' Dark';
        document.body.classList.remove("dark");
        localStorage.removeItem('theme');
      }
      else{
          this.isDarkTheme = true;
          this.mode = ' Light';
          document.body.classList.add("dark");
          localStorage.setItem('theme', "dark");
      }
    }
  }

   
});
</script>

<style lang="scss">

.theme-switch{
  font-size: 14px;
  background: transparent;
  border: none;
  color: var(--DarkText);
  cursor: pointer;
}

.mode-text{
  font-size: 13px;
}

</style>