import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Header from "@/components/Header.vue";
import AllEvents from "@/components/AllEvents.vue";


let wrapper;
beforeEach(() => {
wrapper = mount(Home)
})

it("Test components on rendering", () => {

  let header = wrapper.findComponent(Header)
  let allevents = wrapper.findComponent(AllEvents)
  
  
  expect(header.exists()).toBe(true);
  expect(allevents.exists()).toBe(true);
})