import React from "react";
import useShoppingListContext from "../hooks/useShoppingListContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
      <p>
        {formatDistanceToNow(new Date(listItem.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
}
