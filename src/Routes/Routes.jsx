import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DontationDetails from "../Pages/DontationDetails/DontationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/donation-details/:id",
                element: <DontationDetails></DontationDetails>,
                loader: fetch('data.json')
            }
        ]
    }
]);


export default router;