<template>
  <div id="app">
    <router-view  />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
@import "@/assets/scss/variables";
@import "@/assets/scss/buttons";
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap" );
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: 500;
  }
  html {

background: url("./assets/img/fishing_.jpg") no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }
#app {
font-family: $font;
letter-spacing: 1px;
}


button {
    @include buttons
}
</style>
