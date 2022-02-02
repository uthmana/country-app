<template>
<main>
    <header>
    <div class="container header-content">
     <h1 class="logo-title">Where is the world?</h1>
       <ThemeSwitch />
    </div>
  </header>
<div class="container">
  <router-view />
</div>


<div class="go-top" title="To top" @click="gotop" > <i class="fa fa-angle-up"></i> </div>

<footer>
   © 2022 Developed by <a class="footer-link" href="https://portfolio.uthmanmuhammad.com" target="_blank">Uthman AHMAD MUHAMMAD </a>
</footer>

</main>
</template>



<script lang="ts">
import { defineComponent} from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue'

export default defineComponent({
  name: 'App',
  components: { 
    ThemeSwitch
  },
  methods:{
    gotop(){
      window.scrollTo(0,0);
    }
  }  
});
</script>


<style lang="scss">
 .go-top{
   position: fixed;
   bottom: 50px;
   right: 100px;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: var(--WhiteDarkTextAndLightElements);
   color: var(--DarkText);
   box-shadow: var(--shadow);
   transition: .2s ease-in;
   cursor: pointer;
   i{
     font-size: 1.4rem;
   }
   &:hover{
     box-shadow: var(--shadowHover);
   }
 }


@media screen and (max-width: 600px) {
    .go-top {
      bottom: 30px;
      right: 10px;
      width: 35px;
      height: 35px;
  }

}


</style>
