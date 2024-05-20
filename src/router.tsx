import { Navigate, createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path:'/home',
        element:<div>首页</div>
    },{
        path:'*',
        element:<Navigate to='/home'/>
    }
]


export default createBrowserRouter(routes)