import Home from "@/views/Home";
import FishingEvent from"@/views/FishingEvent";
import AddEvent from "@/views/AddEvent";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/FishingEvent/:event",
    name: "FishingEvent",
    component: FishingEvent,
  },
  {
    path: "/AddEvent",
    name: "AddEvent",
    component: AddEvent,
  }
  
];
