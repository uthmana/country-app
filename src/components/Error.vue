<template>
   <div class="error-message" v-if="isError">Oops!  {{isError}} . Please try again later</div>
</template>

<script>
export default {
name: "Error",
computed:{
   isError(){
     return this.$store.state.errorMsg;
   }
}
}
</script>

<style lang="scss">

  .error-message{
      width: 100%;
      padding: 20px;
      text-align: center;
      color: red;
      font-weight: bold;
  }


</style>