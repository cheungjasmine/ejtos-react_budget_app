import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, Currency, budget } = useContext(AppContext);

  const remaining =
    budget -
    expenses.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);

  return (
    <div className="alert alert-primary">
      <span>
        Remaining: {Currency}
        {remaining}
      </span>
    </div>
  );
};

export default Remaining;
