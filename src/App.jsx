import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage.jsx";
import Layout from "./layout/Index.jsx";
import Contents from "./components/contents/Contents.jsx";
import Search from "./components/search/Search.jsx";

import "./App.sass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "content/search/:name",
        element: <Contents />,
      },
      {
        path: "content/:contactId",
        element: <Contents />,
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
