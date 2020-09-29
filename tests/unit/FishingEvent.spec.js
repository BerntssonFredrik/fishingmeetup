/* 
testa att dispatch funkar
att man inte kan lägga till tom kommentar

*/
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import FishingEvent from "@/views/FishingEvent.vue"
import AddAttendee from "@/components/AddAttendee.vue"

describe("FishingEvent", () => {


let event;
beforeEach(() => {
    event = [
        {
            id: "111",
            date: "2020-10-30",
            fish: "Gädda",
            imgUrl: "lol",
            info: "Jag har ett extra spö",
            location: "Delsjön",
            organizer: "Fredrik Berntsson",
            time: "11:00",
            comments: {commentName: "Allan", commentComment: "hej hej"},
            attendees: {attendeeName: "Allan", AttendeeNr: "123"}
          },
    ]
})

  it("Should call addComment.", async () => {
    const mockStore = {
        dispatch: jest.fn(),
      },
      wrapper = shallowMount(FishingEvent, {
        computed: {
          event: () => {
            return event;
          },
        },
        mocks: { $store: mockStore, },
      });
      let data = wrapper.setData({commentName: "Allan", commentComment: "hej hej"})
    await wrapper.find(".commentButton").trigger("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith("addComment", data);
  })   

/*   it("Should call addAttendee.", async () => {
    const mockStore = {
        dispatch: jest.fn(),
      },
      wrapper = mount(FishingEvent, {
          AddAttendee,
        mocks: { $store: mockStore},
        computed: {
            event: () => {
              return event;
            },
          },
      });
     let data = wrapper.setData({attendeeName: "Allan", attendeeNr: "hej hej"})

    let add = wrapper.findComponent(AddAttendee)
    await add.find(".joinButton").trigger("click");
    wrapper.vm.$nextTick()
    expect(mockStore.dispatch).toHaveBeenCalledWith("addAttendee", data);
  }) */
});