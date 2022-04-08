import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "@/components/Menu";
import Login from "@/views/Login";
import Main from "@/views/Main";
import Experience from "@/views/Experience";
import Education from "@/views/Education";
import Contact from "@/views/Contact";
import Blog from "@/views/Blog";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
        
    },
    {
        path: "/main",
        name: "Main",
        components :{
            default: Main,
            sidebar: Menu
        }
    },
    {
        path:"/experience",
        name: "Experience",
        components: {
            default: Experience,
            sidebar: Menu
        }
    },
    {
        path:"/education",
        name: "Education",
        components: {
            default: Education,
            sidebar: Menu
        }
    },
    {
        path:"/blog",
        name:"Blog",
        components: {
            default: Blog,
            sidebar: Menu
        }
    },
    {
        path:"/contact",
        name: "Contact",
        components: {
            default: Contact,
            sidebar: Menu
        }
    }
]

const router = new VueRouter({
    mode:'history',
    routes
});

export default router