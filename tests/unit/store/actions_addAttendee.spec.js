import Vuex from "vuex";
import Vue from "vue";
import actions from "@/store/modules/actions.js";


Vue.use(Vuex);

let url = "";
let body = {};
let header = {}
let mockError = false;

jest.mock("axios", () => ({
  post: (_url, _body, _header) => {
    const response = { data: { data: {attendeeName: "111", attendeeNr: "111"} } };

    return new Promise((resolve) => {
      if (mockError) throw Error();

      url = _url;
      body = _body;
      header = _header
      resolve(response);
    });
  },
}));

describe("testing action store - addAttendee", () => {
    it("should call action addAttendee with right params", async () => {
        const data = {attendee: {attendeeName: "111", attendeeNr: "111"} },
        
        dispatch = jest.fn();

        await actions.addAttendee({ dispatch }, data);

        expect(url).toBe("/event/addAttendee/" + data.id)
        expect(body).toEqual(
          data.attendee
         
        )
    })
})
