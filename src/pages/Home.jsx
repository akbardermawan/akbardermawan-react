import Footer from "../components/Footer";
import Intro from "../components/home/Intro";

// import { ComputersCanvas } from "../components/canvas";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden relative bg-black/95">
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
