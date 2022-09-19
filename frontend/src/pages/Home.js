import { useEffect, useState } from "react";
import Items from "../Components/Items";

const Home = () => {
  const [shoppingList, setShoppingList] = useState(null);

  useEffect(() => {
    async function fetchShoppingList() {
      const response = await fetch("http://localhost:4000/list");
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
    </div>
  );
};

export default Home;
