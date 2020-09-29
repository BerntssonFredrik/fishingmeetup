<template>
  <div class="wrapper_AddEvent">
    <Nav class="nav" />
    <section class="addEvent">
      <h1>Skapa nytt event</h1>
      <ul class="eventUl">
        <li class="eventLi">
          <label for="imgUrl">URL för bild:</label>
          <input type="text" id="imgUrl" v-model="input.imgUrl" />
        </li>
        <li class="eventLi">
          <label for="fish">Fisk:</label>
          <input type="text" id="fish" v-model="input.fish" />
        </li>
        <li class="eventLi">
          <label for="date">Datum:</label>
          <input type="date" name="" id="date" v-model="input.date" />
        </li>
        <li class="eventLi">
          <label for="time">Tid:</label>
          <input type="time" name="" id="time" v-model="input.time" />
        </li>
        <li class="eventLi">
          <label for="location">Plats:</label>
          <input type="text" id="location" v-model="input.location" />
        </li>
        <li class="eventLi">
          <label for="organizer">Arrangör:</label>
          <input type="text" name="" id="organizer" v-model="input.organizer" />
        </li>
        <li class="eventLi">
          <label for="info">Information:</label>
          <input type="text" class="info" id="info" v-model="input.info" maxlength="100"/>
        </li>
      </ul>

      <button @click="addEvent" class="addButton">Skapa event</button>
    </section>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
export default {
  components: {Nav},
  data() {
    return {
      input: {
        imgUrl: "",
        fish: "",
        location: "",
        date: "",
        organizer: "",
        time: "",
        info: "",
      },
    };
  },

  methods: {
    addEvent() {
      if (
        Object.keys(this.input).some((key) => this.input[key] === "") === false
      ) {
        this.$store.dispatch("addEvent", this.input);
              this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.wrapper_AddEvent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.nav {
  position: absolute;
  top: 0;
  left:0;

 }
.addEvent {
  background-color: $dark;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 6px;
  padding: 1rem;
}
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
.eventUl {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 10rem;
  border-radius: 6px;
}
.eventLi {
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin: 1rem 0;

  input {
    background-color: $dark;
    color: white;
    border: none;
    outline: none;
    height: 2rem;
    border-bottom: 1px solid $orange;
    border-radius: 2px;
  }
}
.addButton {
  height: 2rem;
  margin: 2rem;
  width: 10rem;
  background-color: $orange;
  color: white;
}
.info {
  height: 3rem;
}
</style>
