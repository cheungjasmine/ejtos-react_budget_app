import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, Currency, budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);

  const BUDGET_LIMIT = 20000;

  const checkAndThenSetBudget = (value) => {
    if (value < totalExpenses) {
      alert("You cannot reduce the budget value lower than spending");
      return;
    }

    if (value <= 0) {
      alert("Budget value has to be greater than zero");
      return;
    }

    if (value > BUDGET_LIMIT) {
      alert("Budget value cannot be greater than " + BUDGET_LIMIT);
      return;
    }

    changeBudget(value);
  };

  const changeBudget = (val) => {
    dispatch({
      type: "CHG_BUDGET",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget:{Currency}</span>
      <input
        required="required"
        type="number"
        id="budget"
        value={budget}
        style={{ size: 10, width: 100 }}
        step="10"
        onChange={(event) => checkAndThenSetBudget(event.target.value)}
      ></input>
    </div>
  );
};

export default Budget;
