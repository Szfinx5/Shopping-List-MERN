import { ShoppingListContext } from "./ShoppingListContext";
import { useContext } from "react";

const useShoppingListContext = () => {
  const context = useContext(ShoppingListContext);

  if (!context) {
    throw Error(
      "useShoppingListContext should be used inside the ShoppingListContextProvider"
    );
  }

  return context;
};

export default useShoppingListContext;
