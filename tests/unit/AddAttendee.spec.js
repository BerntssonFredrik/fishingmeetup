import { shallowMount } from "@vue/test-utils"
import AddAttendee from "@/components/AddAttendee"

it("should emit addAttendee with the correct value", async () => {
    
    const wrapper = shallowMount(AddAttendee)

     let nameInput = wrapper.find("#attendeeName");
    let nrInput = wrapper.find("#attendeeNr");
    const button = wrapper.find("button")

    await nameInput.setValue("Fredrik Berntsson");
    await nrInput.setValue("123");
    await button.trigger("click") 

    wrapper.vm.addAttendee()
    console.log(wrapper.emitted())
    expect(wrapper.emitted().addAttendee[0]).toEqual([{"attendeeName": "Fredrik Berntsson",  "attendeeNr": "123"}])
})