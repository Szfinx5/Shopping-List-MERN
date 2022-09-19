import { useEffect, useState } from "react";
import ItemForm from "../Components/ItemForm";
import Items from "../Components/Items";

const Home = () => {
  const [shoppingList, setShoppingList] = useState(null);

  useEffect(() => {
    async function fetchShoppingList() {
      const response = await fetch(`${process.env.REACT_APP_URL}/list`);
      console.log("URL", `${process.env.REACT_APP_URL}/list`);
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      if (response.ok) {
        setShoppingList(data);
      }
    }
    fetchShoppingList();
  }, []);

  return (
    <div className="home">
      <div className="shopping-list">
        {shoppingList &&
          shoppingList.map((listItem) => (
            <Items key={listItem._id} listItem={listItem} />
          ))}
      </div>
      <ItemForm />
    </div>
  );
};

export default Home;
