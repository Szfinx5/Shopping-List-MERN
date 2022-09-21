import React from "react";
import useShoppingListContext from "../hooks/useShoppingListContext";

export default function Items({ listItem }) {
  const { dispatch } = useShoppingListContext();

  async function handleClick() {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/list/${listItem._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: data });
    }
  }

  return (
    <div className="items">
      <h4>{listItem.ingredient}</h4>
      <p>
        <strong>{listItem.amount + " " + listItem.unit}</strong>
      </p>
      <strong></strong>
      <p>{listItem.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
}
