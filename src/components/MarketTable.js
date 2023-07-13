import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function MarketTable() {
  const [coinsList, setCoinList] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      async function fetchCoin(page) {
        const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=${
          page * 10
        }`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "7d4091467emsh524b572f75eeea0p162719jsn91e9810a85de",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        };

        const res = await fetch(url, options);
        const data = await res.json();
        setCoinList(data.data.coins);
        setIsLoading(false);
      }
      fetchCoin(activePage);
    },
    [activePage]
  );

  return (
    <div className="market-table-container">
      <h2>Market Update</h2>

      <div className="market-table">
        <div className="market-table-header">
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change </p>
          <p>Market Cap</p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          coinsList.map((coin) => (
            <MarketTableItem key={coin.uuid} coin={coin} />
          ))
        )}
        <MarketTableNavigator
          activePage={activePage}
          onActivePage={setActivePage}
        />
      </div>
    </div>
  );
}

function MarketTableItem({ coin }) {
  const formatter = new Intl.NumberFormat("en-US");

  let price = formatter.format(Number(coin.price).toFixed(2));

  if (price.length < 3) {
    price = (price + ".").padEnd(4, 0);
  }

  return (
    <div className="market-table-item">
      <div className="coin-details">
        <img src={coin.iconUrl} alt="coin" />
        <p>{coin.name}</p>
      </div>
      <p>$ {price}</p>
      <p className={coin.change > 0 ? "inc" : "dec"}>
        {Math.abs(coin.change).toFixed(2)} %
      </p>
      <p>$ {formatter.format(coin.marketCap)}</p>
    </div>
  );
}

function MarketTableNavigator({ activePage, onActivePage }) {
  return (
    <ul className="market-table-navigator">
      <li>
        <button
          className={activePage === 0 ? "btn-active" : ""}
          onClick={(e) => onActivePage(0)}
        >
          1
        </button>
      </li>
      <li>
        <button
          className={activePage === 1 ? "btn-active" : ""}
          onClick={(e) => onActivePage(1)}
        >
          2
        </button>
      </li>
      <li>
        <button
          className={activePage === 2 ? "btn-active" : ""}
          onClick={(e) => onActivePage(2)}
        >
          3
        </button>
      </li>
      <li>
        <button
          className={activePage === 3 ? "btn-active" : ""}
          onClick={(e) => onActivePage(3)}
        >
          4
        </button>
      </li>
      <li>
        <button
          className={activePage === 4 ? "btn-active" : ""}
          onClick={(e) => onActivePage(4)}
        >
          5
        </button>
      </li>
    </ul>
  );
}
