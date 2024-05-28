import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

const routes = [
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/detail',
        element:<Detail/>
    },{
        path:'*',
        element:<Navigate to='/home'/>
    }
]


export default createBrowserRouter(routes)