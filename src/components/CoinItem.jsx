import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";

function CoinItem({ item }) {
  return (
    <tr className="h-20 border-b overflow-hidden">
      <td>
        <AiOutlineStar />
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
