import { createRouter, createWebHistory } from "vue-router";
import HeroView from "@/views/HeroView.vue";
import AboutView from "@/views/AboutView.vue";
import WhyUsView from "@/views/WhyUsView.vue";
import MenuView from "@/views/MenuView.vue";
import SpecialsView from "@/views/SpecialsView.vue";
import EventsView from "@/views/EventsView.vue";
import SeatView from "@/views/SeatView.vue";
import GalleryView from "@/views/GalleryView.vue";
import ChefsView from "@/views/ChefsView.vue";
import TestimonialsView from "@/views/TestimonialsView.vue";
import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";

import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hero",
      name: "hero",
      component: HeroView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/whyus",
      name: "whyus",
      component: WhyUsView,
    },
    {
      path: "/menu",
      name: "menu",
      component: MenuView,
    },
    {
      path: "/specials",
      name: "specials",
      component: SpecialsView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
    {
      path: "/seat",
      name: "seat",
      component: SeatView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/member",
      name: "member",
      component: ChefsView,
    },
    {
      path: "/testimonials",
      name: "testimonials",
      component: TestimonialsView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/TestView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound, //404頁面
    },
    


  ],
  //配置路由滾動行為
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
