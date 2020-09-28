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
    const response = { data: { data: {commentName: "111", commentComment: "111"} } };

    return new Promise((resolve) => {
      if (mockError) throw Error();

      url = _url;
      body = _body;
      header = _header
      resolve(response);
    });
  },
}));

describe("testing action store - addComment", () => {
    it("should call action addComment with right params", async () => {
        const data = {comment: {commentName: "111", commentComment: "111"} },
        
        dispatch = jest.fn();

        await actions.addComment({ dispatch }, data);

        expect(url).toBe("/event/addComment/" + data.id)
        expect(body).toEqual(
          data.comment
         
        )
    })
})
