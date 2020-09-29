import { mount } from "@vue/test-utils";
import Events from "@/components/Events.vue";
import AllEvents from "@/components/AllEvents.vue";
import SearchField from "@/components/SearchField.vue";

describe("Testing SearchField results", () => {
  let eventList, filteredList;
  beforeEach(() => {
    eventList = [
      {
        _id: "1",
        imgUlr: "img",
        fish: "Abborre",
        date: "2020-12-12",
        time: "time",
        location: "Delsjön",
        organizer: "me",
        info: "fishing",
      },
      {
        _id: "2",
        imgUlr: "img",
        fish: "Abborre",
        date: "2020-12-12",
        time: "time",
        location: "Abborresjön",
        organizer: "me",
        info: "fishing",
      },
      {
        _id: "3",
        imgUlr: "img",
        fish: "Gädda",
        date: "2020-12-12",
        time: "time",
        location: "Delsjön",
        organizer: "me",
        info: "fishing",
      },
      {
        _id: "4",
        imgUlr: "img",
        fish: "Gös",
        date: "2020-12-12",
        time: "time",
        location: "Delsjön",
        organizer: "me",
        info: "fishing",
      },
    ];
    filteredList = [];
  });
  it("display matching events by fish", async () => {
    const mockStore = {
        state: { eventList, filteredList },
        dispatch: jest.fn(),
      },
      wrapper = mount(AllEvents, {
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return eventList;
          },
        },
      }),
      searchField = wrapper.findComponent(SearchField)
      searchField.setData( {fishSearch: "Abborre"})
      await searchField.find(".Search").trigger("click")
      expect(wrapper.findAll(".eventLi").length).toBe(2)
  });

  it("display matching events by location", async () => {
    const mockStore = {
        state: { eventList, filteredList },
        dispatch: jest.fn(),
      },
      wrapper = mount(AllEvents, {
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return eventList;
          },
        },
      }),
      searchField = wrapper.findComponent(SearchField)
      searchField.setData( {locationSearch: "Delsjön"})
      await searchField.find(".Search").trigger("click")
      expect(wrapper.findAll(".eventLi").length).toBe(3)
  });
});
