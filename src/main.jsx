import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router";

// 🚀 Lazy load pages
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));

import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/projects"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
          </Suspense>
        }
      />
      <Route path="/contact" element={<Contact />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
