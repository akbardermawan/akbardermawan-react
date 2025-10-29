import Footer from "../components/Footer";
import Intro from "../components/home/Intro";
import Project from "../components/home/Project";

// import { ComputersCanvas } from "../components/canvas";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Intro />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
