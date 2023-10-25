import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddBooks from "../AddBooks/AddBooks";
import Login from "../Login/Login";
import Error from "../Error/Error";
import GetBooks from "../GetBooks/GetBooks";
import UpdateBook from "../UpdateBooks/UpdateBook";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/books')
            },
            {
                path: "/addBooks",
                element: <AddBooks></AddBooks>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/getBooks",
                element: <GetBooks></GetBooks>
            },
            {
                path: "/updateBook/:id",
                element: <UpdateBook></UpdateBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
            }
        ]
    },

])

export default router;