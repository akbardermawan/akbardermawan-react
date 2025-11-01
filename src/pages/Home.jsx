import Footer from "../components/Footer";
import ContactHome from "../components/home/ContactHome";
import Intro from "../components/home/Intro";
import Project from "../components/home/Project";

// import { ComputersCanvas } from "../components/canvas";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-black relative">
      <Intro />
      <Project />
      <ContactHome />
      <Footer />
    </div>
  );
};

export default Home;
