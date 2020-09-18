<template>
  <div class="home">
      <button @click="testing"></button>
    <Header />
    <AllEvents/>
  </div>
</template>

<script>


import Header from "@/components/Header"
import AllEvents from "@/components/AllEvents"
export default {
  name: 'Home',
 components: {  Header, AllEvents},
  methods:{
    testing(){
      this.$store.dispatch("test")
    }
  }
}
</script>
