import btc from "../assets/btc-float.png";
import eth from "../assets/eth-float.png";
import CoinSlider from "./CoinSlider";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img className="btc-float float" src={btc} alt="btc-float" />
        <h1>
          Track and Trade
          <br></br>
          <span>Crypto Currencies</span>
        </h1>
        <img className="eth-float float" src={eth} alt="eth-float" />
      </div>
      <CoinSlider />
    </div>
  );
}
