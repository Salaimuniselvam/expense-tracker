import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Transactions = (props) => {
  const sign = props.transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <li className={sign === "-" ? "minus" : "plus"}>
        {props.transaction.text}{" "}
        <span>
          {sign}${Math.abs(props.transaction.amount)}
        </span>
        <button
          onClick={(e) => deleteTransaction(props.transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};
