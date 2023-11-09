import React, { useContext } from "react";
import { FaTimesCircle, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, Currency } = useContext(AppContext);

  const handleDeleteItem = () => {
    const item = {
      name: props.name,
    };

    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };

  const handleIncreaseAllocation = () => {
    const item = {
      name: props.name,
      cost: 10,
    };

    dispatch({
      type: "INCREASE_ITEM",
      payload: item,
    });
  };

  const handleDecreaseAllocation = () => {
    const item = {
      name: props.name,
    };

    dispatch({
      type: "DECREASE_ITEM",
      payload: item,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {Currency}
        {parseInt(props.quantity)}
      </td>
      <td>
        <FaPlusCircle
          size="2em"
          color="green"
          onClick={(event) => handleIncreaseAllocation(props.name)}
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          size="2em"
          color="red"
          onClick={(event) => handleDecreaseAllocation(props.name)}
        ></FaMinusCircle>
      </td>
      <td>
        <FaTimesCircle
          size="2.2em"
          color="black"
          onClick={handleDeleteItem}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;
