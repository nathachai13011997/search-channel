import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage.jsx";
import Layout from "./layout/Index.jsx";
import Contents from "./components/contents/Contents.jsx";
import Home from "./components/home/Home.jsx";
import Search from "./components/search/Search.jsx";
import Advice from "./components/advice/Advice.jsx";

import "./App.sass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "content/search/:name",
        element: <Contents />,
      },
      {
        path: "content/:contactId",
        element: <Contents />,
      },
      {
        path: "content/advice",
        element: <Advice />,
      },
    ],
  },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
