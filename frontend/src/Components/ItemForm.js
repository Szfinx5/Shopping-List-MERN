import { useState } from "react";
import useShoppingListContext from "../hooks/useShoppingListContext";

const ItemForm = () => {
  const { dispatch } = useShoppingListContext();
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const item = { ingredient, amount, unit };
    const response = await fetch(`${process.env.REACT_APP_URL}/list`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
    // console.log("Dispatch", dispatch);
    const body = await response.json();

    if (!response.ok) {
      setError(body.error);
      console.log(body);
    }
    if (response.ok) {
      setIngredient("");
      setAmount("");
      setUnit("");
      setError(null);
      console.log("New item was added ", body);
      dispatch({ type: "CREATE_ITEM", payload: body });
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add an ingredient</h3>
      <label>Ingredient:</label>
      <input
        type="text"
        onChange={(e) => setIngredient(e.target.value)}
        value={ingredient}
      />

      <label>Amount:</label>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />

      <label>Unit:</label>
      <input
        type="text"
        onChange={(e) => setUnit(e.target.value)}
        value={unit}
      />
      <button>Add to the shopping list</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ItemForm;
