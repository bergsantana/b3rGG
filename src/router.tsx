import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import CreateMenu from "./views/CreateMenu";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [{
            path: '/create-menu',
            element:  <CreateMenu />
        }]
    },
    
])

export default router