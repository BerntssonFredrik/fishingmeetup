<template>
  <div class="home">
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
  
  
}
</script>
