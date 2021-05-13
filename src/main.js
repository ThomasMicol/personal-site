
import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/home/Home.vue'
import About from './components/about/About.vue'
import Projects from './components/projects/Projects.vue'
import Sticky from 'vue-sticky-directive'
import Contact from './components/contact/Contact.vue'
import './index.css'

const store = createStore({
    devtools: true
});

const routes = [
    {
        path: '/',
        component: Home,

    },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Sticky);

router.isReady().then(() => {
    app.mount("#app");
})

