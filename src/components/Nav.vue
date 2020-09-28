<template>
<div class="wapper_Nav">
  <button class="navButton"> Log in</button>
  <button class="navButton"> Sign up</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
 @import "@/assets/scss/buttons";
 @import "@/assets/scss/variables";
.wrapper {

  button {
    width: 4rem;
    height: 2rem;
    margin: 1rem ;
    @include buttons
  
}

}

</style>