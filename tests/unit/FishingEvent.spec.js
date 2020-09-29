
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import FishingEvent from "@/views/FishingEvent.vue"

describe("FishingEvent", () => {

let event, data;
beforeEach(() => {
    event = 
        {
            _id: "111",
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
    
    data = {comment: { commentName: "hej", commentComment: "hej hej"}, id: "111"}
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
        data() {
          return {
            newComment: { commentName: "hej", commentComment: "hej hej"},
            leaveComment: true
          }
        },
        mocks: { $store: mockStore, },
      });
    
    await wrapper.find("#sendComment").trigger("click");
    await wrapper.vm.$nextTick();
    expect(mockStore.dispatch).toHaveBeenCalledWith("addComment", data);
  })   

  
});