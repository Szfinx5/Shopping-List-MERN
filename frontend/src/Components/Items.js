import React from "react";

export default function Items({ listItem }) {
  return (
    <div className="items">
      <h4>{listItem.ingredient}</h4>
      <p>
        <strong>{listItem.amount + " " + listItem.unit}</strong>
      </p>
      <strong></strong>
      <p>{listItem.createdAt}</p>
    </div>
  );
}
