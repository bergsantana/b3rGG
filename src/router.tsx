import { createBrowserRouter } from "react-router-dom";
 
import CreateMenu from "./views/CreateMenu";
import DietTemplate from "./views/DietTemplate";
import Resume from "./views/Resume";
import App from "./App";
import Android from "./views/Android";

 const router = createBrowserRouter([
    {
        path: '/b3rGG',
        element: <App />,
        children: [
            {
                path:'/b3rGG',
                element: <Resume />
            },
            {
                path: 'create-menu',
                element:  <CreateMenu />
            },{
                path: 'diet',
                element:  <DietTemplate />
            },{
                path: 'android',
                element: <Android />
            }

        ]
    },
    
])

export default router