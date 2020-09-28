<template>
  <div class="wrapper_AddAttendee">
    <label for="attendeeName">Förnamn:</label>
    <input type="text" id="attendeeName" v-model="newAttendee.attendeeName" maxlength="12" />
    <label for="attendeeNr">Telefonnummer:</label>
    <input type="text" id="attendeeNr" v-model="newAttendee.attendeeNr" />
    <button class="joinButton" @click="addAttendee">Join</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newAttendee: {
        attendeeName: "",
        attendeeNr: "",
      },
    };
  },
  methods: {
   addAttendee() {
      if (
        Object.keys(this.newAttendee).some(
          (key) => this.newAttendee[key] === ""
        ) === false
      ) {
         this.$emit("addAttendee", this.newAttendee);
      }
     /*  for (let key in this.newAttendee) {
        this.newAttendee[key] = "";
      } */
   
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.wrapper_AddAttendee {
  display: flex;
  flex-direction: column;
}
input {
  border-radius: 6px;
  outline: none;
  border: none;
  padding: 0.2rem;
}
.joinButton {
  background-color: $orange;
  height: 2rem;
  color: black;
  margin-top: 0.5rem;
}
</style>
