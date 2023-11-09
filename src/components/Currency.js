import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  const style = {
    "background-color": "green",
    color: "white",
  };

  return (
    <div className="alert alert-secondary" style={style}>
      Currency:
      {
        <select
          name="Currency"
          id="Currency"
          style={style}
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option value="£">Pound (£)</option>
          <option value="₹">Ruppee (₹)</option>
          <option value="€">Euro (€)</option>
          <option value="$">Dollar ($)</option>
        </select>
      }
    </div>
  );
};

export default Currency;
