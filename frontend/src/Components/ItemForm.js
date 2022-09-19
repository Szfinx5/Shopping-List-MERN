import { useState } from "react";

const ItemForm = () => {
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const item = { ingredient, amount, unit };
    const response = await fetch("http://localhost:4000/list", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();

    if (!response.ok) {
      setError(body.error);
    }
    if (response.ok) {
      setIngredient("");
      setAmount("");
      setUnit("");
      setError(null);
      console.log("New item was added ", body);
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
