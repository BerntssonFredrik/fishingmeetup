<template>
  <div class="wrapper_fishingEvent">
    <section class="main">
      <div class="top">
        <div class="info">
          <img :src="event.imgUrl" alt="" class="fishImg" />
          <div class="infoText">
            <h1 class="infoText">{{ event.fish }}</h1>
            <h1 class="infoText">{{ event.date }}</h1>
            <h1 class="infoText">{{ event.time }}</h1>
            <h3 class="infoText">{{ event.info }}</h3>

            <button @click="showAddAttandee" class="joinButton">Gå med</button>
            <AddAttendee
              @addAttendee="addAttendee"
              v-show="addAttandee"
            />
          </div>
        </div>

        <section class="comment">
          <h1>Kommentarer</h1>
          <li
            v-for="(comments, index) in event.comments"
            :key="index"
            class="comments"
          >
            <p class="commentName">{{ comments.name }}</p>
            <p>{{ comments.comment }}</p>
          </li>
          <button @click="showLeaveComment" class="commentButton">
            Lämna kommentar
          </button>

          <section class="leaveComment" v-show="leaveComment == true">
            <label for="commentName">Namn:</label>
            <input
              type="text"
             id="commentName"
              v-model="newComment.commentName"
              class="commentInput"
            />
            <label for="commentComment">Kommentar:</label>
            <input
              type="text"
              id="commentComment"
              v-model="newComment.commentComment"
              class="commentInput"
            />
            <button @click="addComment" class="joinButton">Skicka kommentar</button>
          </section>
        </section>
      </div>
      <section class="attendees">
        <li
          v-for="(attendees, index) in event.attendees"
          :key="index"
          class="attendee"
        >
          <img src="../assets/img/profile-user.png" alt="" class="userImg" />
          <p>{{ attendees.name }}</p>
        </li>
      </section>
    </section>
  </div>
</template>

<script>
import AddAttendee from "@/components/AddAttendee";
export default {
  data() {
    return {
      newComment: {
        commentName: "",
        commentComment: "",
      },
      addAttandee: false,
      leaveComment: false,
    };
  },
  name: "FishingEvent",
  components: { AddAttendee },
  computed: {
    event() {
     
      return this.$store.state.event;
      
    },
  },
  methods: {
    addAttendee(attendee) {
      const data = { attendee: attendee, id: this.event._id };
      this.$store.dispatch("addAttendee", data);
    },
    
    addComment() {
      const data = { comment: this.newComment, id: this.event._id };
       if (
        Object.keys(this.newComment).some((key) => this.newComment[key] === "") === false
      ) 
      this.$store.dispatch("addComment", data);
  
   
      for(let key in this.newComment) {
        this.newComment[key] = ""
      }
     
    },

    showAddAttandee() {
      this.addAttandee = !this.addAttandee;
    },
    showLeaveComment() {
      this.leaveComment = !this.leaveComment;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.wrapper_fishingEvent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

}
.main {
  display: flex;
  flex-direction: column;
  background-color: $dark;
  padding: 2rem;
  border-radius: 6px;
max-height: min-content;
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
}
.top {
  display: flex;

}
.fishImg {
  height: 15rem;
  width: 25rem;
  margin-right: 2rem;
  border-radius: 6px;
}
.infoText {
  margin-top: 1rem;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;
}
.joinButton {
  width: 15rem;
  background-color: white;
  color: $dark;
  margin-top: 1rem;
}
.comment {
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
   position: relative;
  h1 {
    color: white;
    
  }
}
.comments {
  border-radius: 6px;
  width: 15rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 0.2rem;
 
}
.commentButton {
  width: 15rem;
  background-color: white;
  color: $dark;
  margin-top: 1rem;
}
.commentName {
  text-decoration: underline;
  margin-bottom: 0.2rem;
}
label {
color: white;
}
.attendees {
  display: flex;
  margin: 1rem;
  margin-top: 10rem;
}
.attendee {
  width: 8rem;
  height: 6rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 0.5rem;
  
}
  .userImg {
    height: 3rem;
    width: 3rem;
  }
  .leaveComment {
    display: flex;
    flex-direction: column;
    width: 15rem;
  }
.commentInput {
border-radius: 6px;
outline: none;
border:none;
padding: 0.2rem;
}
#commentComment{
  height: 3rem;
}
</style>
