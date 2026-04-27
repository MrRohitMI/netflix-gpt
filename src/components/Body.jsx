import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import NetflixError from './NetflixError'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/servererror",
            element: <NetflixError/>
        }
    ])
    
    return (
        <div><RouterProvider router={appRouter} /></div>
    )
}

export default Body