<template>
  <div class="wrapper_fishingEvent">
    <Nav class="nav" />
    <section class="main">
      <div class="info">
        <div class="event">
          <img :src="event.imgUrl" alt="" class="fishImg" />
          <div class="infoText">
            <h1 class="">{{ event.fish }}</h1>
            <h1 class="">{{ event.date }}</h1>
            <h1 class="">{{ event.time }}</h1>
            <h3 class="">{{ event.info }}</h3>
          </div>
        </div>
        <button @click="showAddAttandee" class="attendButton">Gå med</button>
        <!-- @addAttendee="addAttendee" -->
        <AddAttendee
          :eventId="event._id"
          v-show="addAttandee"
          class="addAttandee"
          @showAddAttandee="showAddAttandee"
        />
        <section class="attendees">
          <li
            v-for="(attendees, index) in event.attendees"
            :key="index"
            class="attendee"
          >
            <img src="../assets/img/profile-user.png" alt="" class="userImg" />
            <p class="attendeeName">{{ attendees.name }}</p>
          </li>
        </section>
      </div>
      <section class="comment">
        <h1>Kommentarer:</h1>
        <div class="commentsLi">
          <li
            v-for="(comments, index) in event.comments"
            :key="index"
            class="comments"
          >
            <div class="oldComments">
              <p class="commentName">{{ comments.name }}</p>
              <p class="newComment">{{ comments.comment }}</p>
            </div>
          </li>
        </div>
        <button @click="showLeaveComment" class="commentButton">
          Lämna kommentar
        </button>

        <section class="leaveComment" v-show="leaveComment">
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
          <button @click="addComment" id="sendComment" class="commentButton">
            Skicka kommentar
          </button>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import AddAttendee from "@/components/AddAttendee";
import Nav from "@/components/Nav";
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
  components: { AddAttendee, Nav },
  computed: {
    event() {
      return this.$store.state.event;
    },
  },
  methods: {
    addComment() {
      const data = { comment: this.newComment, id: this.event._id };
      if (
        Object.keys(this.newComment).some(
          (key) => this.newComment[key] === ""
        ) === false
      ) {
        this.$store.dispatch("addComment", data);
        this.showLeaveComment()
      }
    },
    showAddAttandee() {
      this.addAttandee = !this.addAttandee;
    },
    showLeaveComment() {
      this.leaveComment = !this.leaveComment;
    },
  },
  created() {
    console.log(this.$route.params.id)
     this.$store.dispatch("getEvent", this.$route.params.event)
  }
    
  
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
  width: 100vw;
}
.nav {
  position: absolute;
  top: 0;
  left: 0;
}
.main {
  display: flex;
  flex-direction: row;
  background-color: $dark;
  padding: 2rem;
  border-radius: 6px;

  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  height: 80vh;
}
.top {
  display: flex;
}
.event {
  display: flex;
}
.fishImg {
  height: 18rem;
  width: 25rem;
  margin-right: 2rem;
  border-radius: 6px;
}
.infoText {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18rem;
  width: 20rem;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}
.commentButton,
.attendButton {
  width: 15rem;
  background-color: $orange;
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
  color: $dark;
  margin: 0.3rem 0.3rem 0 0;
}
.commentsLi {
  overflow: auto;
  overflow-x: hidden;
  height: 25rem;
}
.commentsLi::-webkit-scrollbar {
  background: $orange;
  border-radius: 6px;
}
.commentsLi::-webkit-scrollbar-thumb {
  background: $darkOrange;
  border-radius: 6px;
}
.commentButton {
  width: 15rem;
  background-color: $orange;
  color: $dark;
  margin-top: 1rem;
}
.commentName {
  text-decoration: underline;
  margin-bottom: 0.2rem;
  font-size: 20px;
  font-weight: 900;
}

.newComment {
  width: 100%;
  word-break: break-word;
}
label {
  color: white;
}
.attendees {
  display: flex;
  width: 40rem;
  overflow: auto;
  overflow-y: hidden;
  padding-bottom: 1rem;
}
.attendees::-webkit-scrollbar {
  background: $orange;
  border-radius: 6px;
}
.attendees::-webkit-scrollbar-thumb {
  background: $darkOrange;
  border-radius: 6px;
}
.attendee {
  min-width: 8rem;
  max-width: 8rem;
  height: 6rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 0.5rem;
}
.addAttandee {
  width: 15rem;
}
.attendeeName {
  color: $dark;
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
  border: none;
  padding: 0.2rem;
}
#commentComment {
  height: 3rem;
}
</style>
