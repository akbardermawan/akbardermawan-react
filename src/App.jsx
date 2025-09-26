import Navigation from "./components/layout/Navigation";

import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import LoadingScreen from "./components/layout/LoadingScreen";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
