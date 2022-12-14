import { createContext, useReducer } from "react";

export const ShoppingListContext = createContext();

export const shoppingListReducer = (state, action) => {
  switch (action.type) {
    case "SET_SHOPPING_LIST":
      return {
        shoppingList: action.payload,
      };
    case "CREATE_ITEM":
      return {
        shoppingList: [action.payload, ...state.shoppingList],
      };
    case "DELETE_ITEM":
      return {
        shoppingList: state.shoppingList.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const ShoppingListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingListReducer, {
    shoppingList: null,
  });

  return (
    <ShoppingListContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShoppingListContext.Provider>
  );
};
