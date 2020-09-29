<template>
<div class="wapper_Nav">
  <button class="navButton" @click="showEvent"> Home</button>
 
  </div>
</template>

<script>
export default {

methods: {
  showEvent(){
    this.$router.push("/").catch(()=>{});
  }
}
}
</script>

<style lang="scss" >
 @import "@/assets/scss/buttons";
 @import "@/assets/scss/variables";
.wapper_Nav {

  button {
    width: 5rem !important;
    margin: 1rem ;
    @include buttons
}

}

</style>