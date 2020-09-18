import { shallowMount, createLocalVue } from '@vue/test-utils';
import AddEvent from "@/components/AddEvent";
import Vuex from 'vuex';
import Actions from '@/store/modules/actions.js'; 
import Vue from 'vue';
import { is } from 'core-js/fn/object';


const localVue = createLocalVue().use(Vuex);
Vue.use(Vuex);

it("Should check action is called when AddEvent button is clicked", async () => {
    let actions = { addEvent: jest.fn() };
    let store = new Vuex.Store({ actions });

    const wrapper = shallowMount(AddEvent, {
        localVue,
        store,
      });

      const fishInput = wrapper.find("#fish");
      await fishInput.setValue("Gädda");

      const locationInput = wrapper.find("#location");
      await locationInput.setValue("Delsjön");

      const dateInput = wrapper.find("#date");
      await dateInput.setValue("12/12");

      const weekdayInput = wrapper.find("#weekday");
      await weekdayInput.setValue("Torsdag");

      const timeInput = wrapper.find("#time");
      await timeInput.setValue("11:00 - 22:00")

      const addButton = wrapper.find(".addButton");
      
     
          await addButton.trigger("click")
      
      expect(actions.addEvent).toHaveBeenCalled()
    })


    /* 
      const input = [
        {
            fish: "Gädda",
            location: "Delsjön",
            date: "22/12",
            weekday: "Torsdag",
            time: "11:00 - 22:00"
        }
    ] */

    
      
