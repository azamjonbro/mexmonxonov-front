import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home/Home.vue";
// import About from "@/pages/About.vue";
// import Services from "@/pages/Services.vue";
// import Contact from "@/pages/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    // { path: "/about", name: "About", component: About },
    // { path: "/services", name: "Services", component: Services },
    // { path: "/contact", name: "Contact", component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
