import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
