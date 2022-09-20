import { useEffect } from "react";
import ItemForm from "../Components/ItemForm";
import Items from "../Components/Items";
import useShoppingListContext from "../Components/hooks/useShoppingListContext";

const Home = () => {
  // const [shoppingList, setShoppingList] = useState(null);
  const { shoppingList, dispatch } = useShoppingListContext();
  useEffect(() => {
    async function fetchShoppingList() {
      const response = await fetch(`${process.env.REACT_APP_URL}/list`);
      // console.log("URL", `${process.env.REACT_APP_URL}/list`);
      // console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      if (response.ok) {
        // setShoppingList(data);
        dispatch({ type: "SET_SHOPPING_LIST", payload: data });
      }
    }
    fetchShoppingList();
  }, [dispatch]);

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
