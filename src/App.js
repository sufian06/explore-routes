import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/products", element: <Products /> },
        {
          path: "/friends",
          element: <Friends />,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: '/friend/:friendId',
          loader: async ({params}) => {
            // console.log(params.friedID)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        }
      ],
    },

    { path: "/about", element: <About /> },
    { path: "*", element: <div>This route is not found</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
