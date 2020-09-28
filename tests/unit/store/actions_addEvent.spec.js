import Vuex from "vuex";
import Vue from "vue";
import actions from "@/store/modules/actions.js";


Vue.use(Vuex);

let url = "";
let body = {};
let mockError = false;

jest.mock("axios", () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) throw Error();

      url = _url;
      body = _body;
      resolve();
    });
  },
}));

describe("testing action store - addEvent", () => {
  it("should call action addEvent with right params", async () => {
    const imgUrl = "imgUrl",
      fish = "fish",
      location = "location",
      date = "date",
      organizer = "organizer",
      time = "time",
      info = "info",
      dispatch = jest.fn();

    await actions.addEvent(
      { dispatch },
      { imgUrl, fish, location, date, organizer, time, info }
    );
    expect(url).toBe("/event/addEvent");
    expect(body).toEqual({
      imgUrl,
      fish,
      location,
      date,
      organizer,
      time,
      info,
    });
  });
});
