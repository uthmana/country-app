<template>
  <div v-if="isScrollDown" class="go-top" title="To top" @click="gotop" > <i class="fa fa-angle-up"></i> </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 name: "ScrollTop",
 data(){
      return {
      isScrollDown: false as boolean
   }
 },
  methods:{
    onScroll(){
     const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
     currentScrollPosition == 0 ? this.isScrollDown = false:  this.isScrollDown = true;
    },
    gotop(){
      window.scrollTo(0,0);
    }
  },
  mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
   beforeUnmount () {
     window.removeEventListener('scroll', this.onScroll)
  }

})
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