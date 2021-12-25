
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddResto from './pages/AddResto'
import RestoList from './pages/RestoList'
import EditResto from './pages/EditResto'
import { createRouter , createWebHistory } from 'vue-router';


const routes = [
    {
        name : "Home",
        path : "/",
        component : Home
    },
    {
        name : "Login",
        path : "/login",
        component : Login
    },
    {
        name : "SignUp",
        path : "/sign-up",
        component : SignUp
    },
    {
        name : "AddResto",
        path : "/add-resto",
        component : AddResto
    },
    {
        name : "RestoList",
        path : "/resto-list",
        component : RestoList
    },
    {
        name : "EditResto",
        path : "/edit-resto/:id",
        component : EditResto
    }
]


const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router