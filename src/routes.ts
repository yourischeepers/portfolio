import HomeScreen from "./ui/screens/home/HomeScreen.vue";
import ProjectScreen from "./ui/screens/project/ProjectScreen.vue";

export const routes = [
    { path: '/', component: HomeScreen },
    { path: '/home', redirect: '/' },
    { path: '/project/:slug', component: ProjectScreen },

    // Unknown redirect
    { path: '/:pathMatch(.*)', redirect: '/' },
]
