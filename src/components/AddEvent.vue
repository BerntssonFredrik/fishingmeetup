<template>
<div class="wrapper">

    <label for="fish">Fisk:</label>
  <input type="text" id="fish" v-model="input.fish">
  <label for="location">Plats:</label>
<input type="text" id="location" v-model="input.location">
<label for="date">Datum:</label>
<input type="text" name="" id="date" v-model="input.date">
<label for="weekday">Veckodag:</label>
<input type="text" name="" id="weekday" v-model="input.weekday">
<label for="time">Tid:</label>
<input type="text" name="" id="time" v-model="input.time">
<button @click="addEvent" class="addButton">Skapa event</button>
</div>
</template>

<script>
export default {
data() {
    return{
        input: {
            fish: "",
            location: "",
            date: "",
            weekday: "",
            time: "",
    }

}
},
methods: {
    addEvent() {
      
      this.$store.dispatch('addEvent', this.input)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
</style>