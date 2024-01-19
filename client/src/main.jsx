import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';

import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);