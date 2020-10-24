import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import VueStickto from 'vue-stickto'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const store = createStore({
    devtools: true
});

const routes = [
    {
        path: '/home',
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
app.use(VueStickto);



app.mount('#app');


