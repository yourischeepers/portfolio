import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes.ts";

const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        return { top: 0 }
    }
})

let isFirstNavigation = true

router.beforeEach(async (to, from, next) => {
    if (isFirstNavigation) {
        isFirstNavigation = false
        return next()
    }

    const overlayRef = router.overlay?.value

    if (!overlayRef) return next()
    await overlayRef.show()

    if (to.meta.getScreenName) {
        const name = to.meta.getScreenName(to)
        overlayRef.setScreenName(name)
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))

    next()
})

router.afterEach(async () => {
    const overlayRef = router.overlay?.value
    overlayRef.hide()
})

createApp(App)
    .use(router)
    .mount('#app')
