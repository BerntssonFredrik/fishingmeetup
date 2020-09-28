import Vuex from "vuex";
import Vue from "vue";
import actions from "@/store/modules/actions.js";
import { resolve } from "path";

Vue.use(Vuex);

let url = "";

jest.mock("axios", () => ({
  get: (_url) => {
    const response = { data: { success: true, events: "event" } };

    return new Promise((resolve) => {
      url = _url;
      resolve(response);
    });
  },
}));

describe("testing action store - getEvents", () => {
    it("Should get getEvents whit correct params", async () => {
        const data = { success: true, events: 'event' },
        commit = jest.fn()

        await actions.getEvents({ commit })
        expect(url).toBe("/event/getAll")
        expect(commit).toHaveBeenCalledWith("getEvents", data)
    })
})