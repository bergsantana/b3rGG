import { createBrowserRouter } from "react-router-dom";
 
import CreateMenu from "./views/CreateMenu";
import DietTemplate from "./views/DietTemplate";
import Resume from "./views/Resume";
import App from "./App";

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
            }
        ]
    },
    
])

export default router