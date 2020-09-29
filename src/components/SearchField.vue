<template>
  <div class="wrapper_SearchField">
    <div class="inputs">
      <input type="text" placeholder="Sök efter fisk" @keydown.enter="setFilter" v-model="fishSearch" class="inputs">
      <input type="text" placeholder="Sök efter plats" @keydown.enter="setFilter" v-model="locationSearch" class="inputs">  
      </div>    
       <button class="Search" @click="setFilter"> Sök</button> 
      <button class="addEvent" @click="showAddEvent"> Skapa nytt event</button>
  </div>
</template>

<script>
export default {
data() {
  return {
    fishSearch: "",
    locationSearch: "",
    hasFilter: false,
    filteredList: []
  }
},


methods: {
  showAddEvent(){
     this.$router.push("/AddEvent")
  },
  setFilter(){
    let allEvents =this.$store.state.eventList;
    this.filteredList = allEvents.filter((item) => {
      if(item.fish.toLowerCase().includes(this.fishSearch.toLowerCase()) &&
      item.location.toLowerCase().includes(this.locationSearch.toLowerCase()))
   
       return item
     
  })

this.$emit("filteredEvents", this.filteredList);
  // document.querySelector(".seeEvent").scrollIntoView({behavior: "smooth"});
}

}

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/buttons";
@import "@/assets/scss/variables";
.wrapper_SearchField {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;


input{
  margin: 0 1rem;

  border-radius: 6px;
  outline: none;
  border: none;
  padding-left: 2rem;
  background-color: $dark;
  color: white;
  width: 15rem;
  font-size: 16px;
  height: 50px;
}
.Search,
.addEvent{

  margin: 0 1rem;
  width: 15rem;
  @include buttons
}
}
</style>