import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Events from "@/components/Events.vue";
import VueRouter from "vue-router";

import routes from "@/router/routes.js";

describe("Events", () => {
  const localVue = createLocalVue().use(VueRouter);
  // const router = new VueRouter({ routes });
  let eventList;
  beforeEach(() => {
    eventList = [
      {
        id: "111",
        date: "2020-10-30",
        fish: "Gädda",
        imgUrl: "lol",
        info: "Jag har ett extra spö",
        location: "Delsjön",
        organizer: "Fredrik Berntsson",
        time: "11:00",
      },

      {
        id: "111",
        date: "2020-10-30",
        fish: "Gädda",
        imgUrl: "lol",
        info: "Jag har ett extra spö",
        location: "Delsjön",
        organizer: "Fredrik Berntsson",
        time: "11:00",
      },
    ];
  });
  it("Should call getAllEvents when created and render all events.", () => {
    const mockStore = {
        state: { eventList },
        dispatch: jest.fn(),
      },
      wrapper = mount(Events, {
        localVue,
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return eventList;
          },
        },
      }),
      eventElements = wrapper.findAll(".eventLi");

    expect(mockStore.dispatch).toHaveBeenCalledWith("getEvents");
    expect(eventElements.length).toBe(eventList.length);
  });
  it("Should call getEvent.", async () => {
    const mockStore = {
        dispatch: jest.fn(),
      },
      wrapper = shallowMount(Events, {
        computed: {
          events: () => {
            return eventList;
          },
        },
        mocks: { $store: mockStore, },
      });

    await wrapper.find(".eventLi").trigger("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith("getEvent", eventList._id);
  });
});
