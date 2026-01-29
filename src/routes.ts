import HomeScreen from "./ui/screens/home/HomeScreen.vue";
import ProjectScreen from "./ui/screens/project/ProjectScreen.vue";
import { GetProjectBySlug } from "./domain/project/GetProjectBySlug.ts";
import AboutScreen from "./ui/screens/about/AboutScreen.vue";

const getProjectBySlug = new GetProjectBySlug();

export const routes = [
    // Home
    {
        path: '/',
        component: HomeScreen,
        meta: {
            getScreenName: (route): string => {
                return "Home"
            }
        },
    },
    { path: '/home', redirect: '/' },

    // About
    {
        path: '/about',
        component: AboutScreen,
        meta: {
            getScreenName: (route): string => {
                return "About"
            }
        },
    },

    // Individual project
    {
        path: '/project/:slug',
        component: ProjectScreen,
        meta: {
            getScreenName: (route): string => {
                const project = getProjectBySlug.invoke(route.params.slug)
                return project ? project.name : "Loading"
            }
        }
    },

    // Unknown redirect
    { path: '/:pathMatch(.*)', redirect: '/' },
]
