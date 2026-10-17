import axios from "axios";
import React, { useEffect, useState } from "react";

function Trending() {
  const [trending, setTrending] = useState([]);
  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      console.log(response.data.coins);
    });
  }, []);
  return (
    <div className="rounded-div my-12 py-8 text-text-primary">
      <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((item, index) => (
          <div
            key={index}
            className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-2">
                <img src={item.item.small} alt="/" className="rounded-full" />
                <div>
                  <p className="font-bold">{item.item.name}</p>
                  <p>{item.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                  className="w-4 mr-2"
                />
                <p>{item.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
