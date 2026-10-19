import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function CoinItem({ item }) {
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, "users", `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: item.id,
          name: item.name,
          image: item.image,
          rank: item.market_cap_rank,
          symbol: item.symbol,
        }),
      });
    } else {
      alert("Please sign in to save a coin to your watch list");
    }
  };
  return (
    <tr className="h-20 border-b overflow-hidden">
      <td onClick={saveCoin}>
        {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td>{item.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${item.id}`}>
          <div className="flex items-center">
            <img
              src={item.image}
              alt={item.id}
              className="w-6 mr-2 rounded-full"
            />
            <p className="hidden sm:table-cell">{item.name}</p>
          </div>
        </Link>
      </td>
      <td>{item.symbol.toUpperCase()}</td>
      <td>${item.current_price.toLocaleString()}</td>
      <td>
        {item.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {item.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {item.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-45 hidden md:table-cell">
        ${item.total_volume.toLocaleString()}
      </td>
      <td className="w-45 hidden sm:table-cell">
        ${item.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={item.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
}

export default CoinItem;
