import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "@/components/Menu";
import Login from "@/views/Login";
import Main from "@/views/Main";
import AboutMe from "@/views/AboutMe";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
        
    },
    {
        path: "/Main",
        name: "Main",
        components :{
            default: Main,
            sidebar: Menu
        }
    },
    {
        path:"/aboutme",
        name: "AboutMe",
        components: {
            default: AboutMe,
            sidebar: Menu
        }
    }
]

const router = new VueRouter({
    mode:'history',
    routes
});

export default router