import { mount } from '@vue/test-utils';
import Events from '@/components/Events.vue';


describe('Testing SearchFielr results', () => {
    let events, filteredList;
    beforeEach(() => {
      events = [
        {
          _id: '1',
          imgUlr: 'img',
          fish: "Abborre",
          date: '2020-12-12',
          time: 'time',
          location: 'location',
          organizer: 'me',
          info: 'fishing',
        },
        {
            _id: '2',
            imgUlr: 'img',
            fish: "Abborre",
            date: '2020-12-12',
            time: 'time',
            location: 'location',
            organizer: 'me',
            info: 'fishing',
          },
          {
            _id: '3',
            imgUlr: 'img',
            fish: "Gädda",
            date: '2020-12-12',
            time: 'time',
            location: 'location',
            organizer: 'me',
            info: 'fishing',
          },
          {
            _id: '4',
            imgUlr: 'img',
            fish: "Gös",
            date: '2020-12-12',
            time: 'time',
            location: 'location',
            organizer: 'me',
            info: 'fishing',
          },
      ];
      filteredList = [];
    })
    it("display matching events" , async () => {
        
    })
})