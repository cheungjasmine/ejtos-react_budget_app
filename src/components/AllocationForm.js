import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, Currency, budget, expenses } = useContext(AppContext);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [action, setAction] = useState("");

  const remaining =
    budget -
    expenses.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);

  const submitEvent = () => {
    if (parseInt(quantity) > remaining) {
      alert(
        "The value should not exceed the remaining funds " +
          Currency +
          remaining
      );
      return;
    }

    const item = {
      name: name,
      quantity: parseInt(quantity),
    };
    if (action === "Reduce") {
      dispatch({
        type: "RED_QUANTITY",
        payload: item,
      });
    } else {
      dispatch({
        type: "ADD_QUANTITY",
        payload: item,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="HR" name="hr">
              Human Resource
            </option>
            <option value="IT" name="it">
              IT
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>
          <span
            className="eco"
            style={{ marginLeft: "2rem", marginRight: "8px" }}
          ></span>
          <label>{Currency}</label>
          <input
            required="required"
            type="number"
            id="cost"
            value={quantity}
            style={{ marginLeft: "1rem", size: 10 }}
            onChange={(event) => setQuantity(event.target.value)}
          ></input>

          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
