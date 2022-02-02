<template>
   <div class="loading" v-if="isLoading">
      <img src="@/assets/loading.gif" alt="loading gif">
   </div>
</template>

<script>
export default {
  name: 'Loading',
  computed:{
     isLoading(){
      return this.$store.state.loading;
     }
  }
}
</script>

<style lang="scss">

.loading {
  width: 100%;
  text-align: center;
  transition: 0.3s ease-out;
  img{
      width: 38px;
  }
}
</style>