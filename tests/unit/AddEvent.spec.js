import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import AddEvent from "@/views/AddEvent";
import VueRouter from "vue-router";
import routes from "@/router/routes.js";


describe("test for AddEvent component", () => {
  it("Should check action is called when AddEvent button is clicked", async () => {
    const localVue = createLocalVue().use(VueRouter);
    const router = new VueRouter({ routes });
    const inputs = {
      date: "2020-10-30",
      fish: "Gädda",
      imgUrl: "lol",
      info: "Jag har ett extra spö",
      location: "Delsjön",
      organizer: "Fredrik Berntsson",
      time: "11:00",
    };
    const mockStore = {
        dispatch: jest.fn(),
       // spy: jest.spyOn(router, "push"),
      },
      wrapper = mount(AddEvent, {
        localVue,
        router,
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return events;
          },
        },
      });
    const imgUrl = wrapper.find("#imgUrl");
    await imgUrl.setValue(inputs.imgUrl);

    const fishInput = wrapper.find("#fish");
    await fishInput.setValue(inputs.fish);

    const dateInput = wrapper.find("#date");
    await dateInput.setValue(inputs.date);

    const timeInput = wrapper.find("#time");
    await timeInput.setValue(inputs.time);

    const locationInput = wrapper.find("#location");
    await locationInput.setValue(inputs.location);

    const organizer = wrapper.find("#organizer");
    await organizer.setValue(inputs.organizer);

    const info = wrapper.find("#info");
    await info.setValue(inputs.info);

    const addButton = wrapper.find(".addButton");
     
    //const route = "/";

    await addButton.trigger("click");
    await wrapper.vm.$nextTick();

    expect(mockStore.dispatch).toHaveBeenCalledWith("addEvent", inputs);
    //expect(mockStore.spy).toHaveBeenCalledWith(route);
  });
});
/* it("Should not complete action if any input is empty", async () => {
     
    const router = new VueRouter({
      routes: [{ path: '/home', name: 'home' }],
    });
  const  mockStore = {
  
      dispatch: jest.fn(),
    },
    wrapper = shallowMount(AddEvent, {
      localVue,
      router,
      mocks: { $store: mockStore },
      computed: {
        events: () => {
          return events;
        },
      },

    });

    const addButton = wrapper.find(".addButton");
    
  
        await addButton.trigger("click")
        await wrapper.vm.$nextTick();
    expect(mockStore.dispatch).toHaveBeenCalled()
  })  

})
 */
