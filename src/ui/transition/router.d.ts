import 'vue-router'

declare module 'vue-router' {
    interface Router {
        overlay?: any
    }
}
