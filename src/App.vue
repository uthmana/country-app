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
   <ScrollTop />

<footer>
   © 2022 Developed by <a class="footer-link" href="https://portfolio.uthmanmuhammad.com" target="_blank">Uthman AHMAD MUHAMMAD </a>
</footer>

</main>

</template>

<script lang="ts">
import { defineComponent} from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default defineComponent({
  name: 'App',
  components: { 
    ThemeSwitch,
    ScrollTop
  }
});
</script>

