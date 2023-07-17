import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import JoinUs from "./components/JoinUs";
import MarketTable from "./components/MarketTable";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="background"></div>
      <MarketTable />
      <ChooseUs />
      <JoinUs />
      <Footer />
    </>
  );
}
