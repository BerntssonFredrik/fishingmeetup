import { shallowMount } from "@vue/test-utils";
import AddAttendee from "@/components/AddAttendee";

let event, data;
beforeEach(() => {
  (event = {
    _id: "111",
    date: "2020-10-30",
    fish: "Gädda",
    imgUrl: "lol",
    info: "Jag har ett extra spö",
    location: "Delsjön",
    organizer: "Fredrik Berntsson",
    time: "11:00",
    comments: { commentName: "Allan", commentComment: "hej hej" },
    attendees: { attendeeName: "Allan", AttendeeNr: "123" },
  }),
    (data = {
      attendee: { attendeeName: "Fred", attendeeNr: "123" },
      id: "111",
    });
});

it("Should call addAttendee.", async () => {
  const mockStore = {
      dispatch: jest.fn(),
    },
    wrapper = shallowMount(AddAttendee, {
      computed: {
        event: () => {
          return event;
        },
      },
      propsData: {
        eventId: "111",
      },
      data() {
        return {
          newAttendee: { attendeeName: "Fred", attendeeNr: "123" },
          addAttandee: true,
        };
      },
      mocks: { $store: mockStore },
    });

  await wrapper.find(".joinButton").trigger("click");
  await wrapper.vm.$nextTick();
  expect(mockStore.dispatch).toHaveBeenCalledWith("addAttendee", data);
});

it("should not emit addAttendee if inputs are empty", async () => {
  const mockStore = {
      dispatch: jest.fn(),
    },
    wrapper = shallowMount(AddAttendee, {
      computed: {
        event: () => {
          return event;
        },
      },
      propsData: {
        eventId: "111",
      },
      mocks: { $store: mockStore },
    });

  await wrapper.find(".joinButton").trigger("click");
  await wrapper.vm.$nextTick();
  expect(mockStore.dispatch).not.toHaveBeenCalledWith("addAttendee", data);
});
