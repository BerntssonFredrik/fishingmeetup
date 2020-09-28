import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import AddEvent from "@/views/AddEvent";
import Vuex from "vuex";
import store from "@/store/index.js";
import FishingEvent from "@/views/FishingEvent";
import routes from "@/router/routes";
import App from "@/App";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe("App.vue", () => {
  let store;
  let router;
  let event;

  beforeEach(() => {
    router = new VueRouter({ routes });
    store = new Vuex.Store({
      state: {
        event,
      },
    });
  });

  it("renders AddEvent via routing", async () => {
  
   /* 
    const $route = {
      path: "/AddEvent",
    };
    const mockStore = {dispatch: jest.fn()} */
    const wrapper = mount(App, {
      localVue,
      router,
      store
     /*  mocks: {
        $route,
        $store: mockStore
      }, */
   //   stubs: ["router-link", "dispatch"],
    });
    router.push('/AddEvent');
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(AddEvent).exists()).toBe(true);
  });

  it("renders a FishingEvent via routing", async () => {
    /* event: [
      {
        id: "5f69c2034cea8d1a6c0e13b3",
        imgUrl:
          "https://www.rapalaproguide.se/wp-content/uploads/2018/10/img_6180-1.jpg",
        fish: "gös",
        location: "Delsjön",
        date: "2020-09-17",
        organizer: "Fredrik",
        time: "10:00",
        comments: [{ name: "Fredirk", comment: "hej" }],
        attendee: [{ name: "Fredirk", email: "hej" }],
      },
    ];
 */
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

    router.push("/FishingEvent/:event");

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(FishingEvent).exists()).toBe(true);
  });
});
