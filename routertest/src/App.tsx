import "./App.css";
import { Header, Main, Product, NotFound } from "./Components/Components";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "product/:id", element: <Product /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    // 이런식으로 따로 user만 해서 빼서 쓸 수 있다. 
    path:'/user',
    element:<Layout/>,
    children:
    [
      {index:true, element:<Main/>}
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
