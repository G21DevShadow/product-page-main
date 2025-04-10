import { useReducer } from "react";

export function useRState() {
  const initialValue = {
    isMenuActive: false,
    isFloatingActive: false,
    isShoppingCartActive: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_MENU":
        return { ...state, isMenuActive: !state.isMenuActive };

      case "TOGGLE_FLOATING":
        return { ...state, isFloatingActive: !state.isFloatingActive };

      case "TOGGLE_SHOPPING_CART":
        return { ...state, isShoppingCartActive: !state.isShoppingCartActive };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return {
    state,
    toggleMenu: () => dispatch({ type: "TOGGLE_MENU" }),
    toggleFloating: () => dispatch({ type: "TOGGLE_FLOATING" }),
    toggleShoppingCart: () => dispatch({ type: "TOGGLE_SHOPPING_CART" }),
  };
}
