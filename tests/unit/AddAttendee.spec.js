import { shallowMount } from "@vue/test-utils"
import AddAttendee from "@/components/AddAttendee"

it("should emit addAttendee whit correct params if all inputs are valid", async () => {
    
    const wrapper = shallowMount(AddAttendee)

     let nameInput = wrapper.find("#attendeeName");
    let nrInput = wrapper.find("#attendeeNr");
    const button = wrapper.find("button")

    await nameInput.setValue("Fredrik Berntsson");
    await nrInput.setValue("123");
    await button.trigger("click") 

    wrapper.vm.addAttendee()
    expect(wrapper.emitted().addAttendee[0]).toEqual([{"attendeeName": "Fredrik Berntsson",  "attendeeNr": "123"}])
})

/* it("should not emit addAttendee if inputs are empty", async () => {
    
    const wrapper = shallowMount(AddAttendee)
    const button = wrapper.find("button")

    await button.trigger("click") 

    wrapper.vm.addAttendee()
    expect(wrapper.emitted().addAttendee[0]).not.toHaveBeenCalled()
}) */