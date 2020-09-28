import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/modules/actions.js';

Vue.use(Vuex);

let url = '';


jest.mock('axios', () => ({
  get: (_url, ) => {
    const response = { data: { success: true, event: 'event' } };

    return new Promise((resolve) => {
      url = _url;
      resolve(response);
    });
  },
}));

describe("testing action store - getEvent", () => {
 it("should get getEvent with the right params", async () => {
    const id = "111",
    data = { success: true, event: "event" },
    commit = jest.fn()
    
    await actions.getEvent({ commit }, id)
    
    expect(url).toBe("/event/getOne/" + id);
    expect(commit).toHaveBeenCalledWith('getEvent', data);
 })
})