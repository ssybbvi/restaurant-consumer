/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import Taro from "@tarojs/taro";
// eslint-disable-next-line no-unused-vars

type StateType = {
  shoppingCartItems: IShoppingCartItem[];
};

type ActionType = {
  type: "LOAD_SHOPPING_CART_ITEMS";
  shoppingCartItems: IShoppingCartItem[];
};

export const CreateOrderContext = Taro.createContext({
  shoppingCartItems: []
});

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "LOAD_SHOPPING_CART_ITEMS":
      return {
        ...state,
        shoppingCartItems: action.shoppingCartItems
      };

    default:
      return state;
  }
};
