import axios from "axios";

export default {
  async addEvent({dispatch}, input) {
    const url = "/event/addEvent";
    await axios
      .post(url, input)
      .then((response) => {
        dispatch("getEvents");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },

  async getEvents({commit}) {
    const url = "/event/getAll";
    await axios
      .get(url)
      .then((response) => {
        commit("getEvents", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  async getEvent({commit}, id) {
    const url = "/event/getOne/"+ id ;
    await axios
    .get(url, )
    .then((response) => {
      commit("getEvent", response.data)
    })
    .catch((error) => {
      console.error(error);
    });
 
  },
  async addAttendee({dispatch}, data) {
    console.log(data )
    const url = "/event/addAttendee/" + data.id;
    await axios
    .post(url, data.attendee)
    .then((response) => {
     dispatch("getEvent", response.data.id) 
    })
    .catch((error) => {
      console.error(error);
    });
  
  },

  async addComment({dispatch}, data) {
    const url = "/event/addComment/" + data.id;
    await axios
    .post(url, data.comment)
    .then((response) => {
      dispatch("getEvent", response.data.id)
    })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
