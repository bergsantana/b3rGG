import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import CreateMenu from "./views/CreateMenu";
import DietTemplate from "./views/DietTemplate";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [{
            path: '/create-menu',
            element:  <CreateMenu />
        },{
            path: '/diet',
            element:  <DietTemplate />
        }]
    },
    
])

export default router