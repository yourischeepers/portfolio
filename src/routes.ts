import HomeScreen from "./ui/screens/home/HomeScreen.vue";
import ProjectScreen from "./ui/screens/project/ProjectScreen.vue";
import { GetProjectBySlug } from "./domain/project/GetProjectBySlug.ts";
import AboutScreen from "./ui/screens/about/AboutScreen.vue";
import type {RouteLocationNormalizedGeneric} from "vue-router";

const getProjectBySlug = new GetProjectBySlug();

export const routes = [
    // Home
    {
        path: '/',
        component: HomeScreen,
        meta: {
            getScreenName: (_: RouteLocationNormalizedGeneric): string => {
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
            getScreenName: (_: RouteLocationNormalizedGeneric): string => {
                return "About"
            }
        },
    },

    // Individual project
    {
        path: '/project/:slug',
        component: ProjectScreen,
        meta: {
            getScreenName: (route: RouteLocationNormalizedGeneric): string => {
                const slug = route.params.slug as string
                const project = slug ? getProjectBySlug.invoke(slug) : undefined
                return project ? project.name : "Loading"
            }
        }
    },

    // Unknown redirect
    { path: '/:pathMatch(.*)', redirect: '/' },
]
