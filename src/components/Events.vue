<template>
  <div class="wrapper">
     <SearchField @filteredEvents="filteredEvents" />
      <ul class="eventUl">
          <li v-for="(event, index) in events " :key="index" class="eventLi" @click="showEvent(event._id)">
            <div class="eventCard">
            <img :src="event.imgUrl" alt="" class="fishImg">
            <div class="topInfo">
           
             <p>{{event.date}}</p>
             <p>{{event.time}}</p>
            </div>
            <p>{{event.fish}}</p>  
             <p>{{event.location}}</p> 
             </div>
          </li>
      </ul>
  </div>
</template>

<script>
import SearchField from "@/components/SearchField"
export default {
  data() {
    return {
      hasFilter: false,
    filteredList: []
    }
  },
  components: {SearchField},
computed: {
events() {
  if(this.hasFilter === false) {
        return this.$store.state.eventList
  } else {
    return this.filteredList
  }
},
 },
  created()
 {
   this.$store.dispatch("getEvents")
 },
 methods: {
     showEvent(id) {

     this.$store.dispatch("getEvent", id).then(() => {
       this.$router.push("/FishingEvent/" + id)
     })
     },
        filteredEvents(event) {

          this.hasFilter = true;
      this.filteredList = event;
      
    },
 }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.eventUl{
      display: flex;
      justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 2rem;
}
.eventLi {
    margin: 2rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   
}
.eventCard {
  background-color: $dark;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
color: white;
  border-radius: 6px;
  height: 25rem;
  width: 20rem;
  text-align: left;
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);

  .fishImg {
  width: 17rem;
  height: 10rem;
  align-self: center;
  border-radius: 6px;
  
  
}
.topInfo {
    display: flex;
    justify-content: space-around;
    font-weight: 900;
    font-size: 1.4rem;
    color: #CA3C25;
    
  }
}



</style>