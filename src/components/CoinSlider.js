import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function CoinSlider() {
  const [coinSliderList, setCoinSliderList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const url =
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=4&offset=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7d4091467emsh524b572f75eeea0p162719jsn91e9810a85de",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    async function fetchCoin() {
      const res = await fetch(url, options);
      const data = await res.json();
      setCoinSliderList(data.data.coins);
      setIsLoading(false);
    }
    fetchCoin();
  }, []);

  return (
    <div className="coin-slider">
      {isLoading ? (
        <Loader />
      ) : (
        coinSliderList.map((coin) => (
          <CoinSliderItem key={coin.uuid} coin={coin} />
        ))
      )}
    </div>
  );
}

function CoinSliderItem({ coin }) {
  const formatter = new Intl.NumberFormat("en-US");
  let price = formatter.format(Number(coin.price).toFixed(2));

  if (price.length < 3) {
    price = (price + ".").padEnd(4, 0);
  }

  return (
    <div className="coin-slider-item">
      <img src={coin.iconUrl} alt="coin" />
      <div className="coin-slider-item-content">
        <div className="coin-details">
          <p>{coin.name}</p>
          <p
            className={coin.change > 0 ? "inc coin-change" : "dec coin-change"}
          >
            {Math.abs(Number(coin.change).toFixed(2))} %
          </p>
        </div>
        <p className="coin-price">$ {price}</p>
      </div>
    </div>
  );
}
