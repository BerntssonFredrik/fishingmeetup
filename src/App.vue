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
@import url("https://fonts.googleapis.com/css2?family=Viga&display=swap" );
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: 500;

    
  }

    input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: none;
  box-shadow: 0 0 0px 1000px $dark inset;
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px $dark inset;
}
  html {

background: url("./assets/img/fishing_.jpg") no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }
html::-webkit-scrollbar {
  background: $orange;
 
}
html::-webkit-scrollbar-thumb {
  background: $darkOrange;
  border-radius: 6px;
}

#app {
font-family: $font;
letter-spacing: 1px;
}


button {
    @include buttons
}
</style>
