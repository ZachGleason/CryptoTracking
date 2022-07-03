import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Components/Coins";
import News from "./Components/News";


const options = {
  method: 'GET',
  url: 'https://last-crypto-news.p.rapidapi.com/cryptonews',
  headers: {
    'X-RapidAPI-Key': '06cdb30582msh3025854541126a3p139367jsna2d846a7285d',
    'X-RapidAPI-Host': 'last-crypto-news.p.rapidapi.com'
  }
};

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [information, setInformation]= useState([]);
 
  // axios.request(options).then(function (response) {
  //   setInformation(response.data)
  //   console.log(information);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Crypto Scout</h1>
        <h3 className="coin-text">Track Crypto Currency Prices</h3>
        <form>
          <input
            type="text"
            placeholder="Search a currency"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="coins-wrapper">
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
      </div>
      <div>
        <div className="news-section">
          <h1 className="news-headline">Crypto News Daily</h1>
        </div>
        {/* {information.map((data) => {
          return (
            <News 
              key={data.id} 
              title={data.title}
              description={data.description}
              url={data.url}
              date={data.date}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default App;