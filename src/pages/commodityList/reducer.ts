/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import Taro from "@tarojs/taro";
// eslint-disable-next-line no-unused-vars

export type StateType = {
  shoppingCartItems: IShoppingCartItem[];
  commodityItems: ICommodityItem[];
  amountTotal: number;
  isShowCart: boolean;
};

type ActionType =
  | {
      type: "SELECTED_COMMODITY_ITEM";
      commodityItem: ICommodityItem;
    }
  | {
      type: "LOAD_COMMODITY_ITEMS";
      commodityItems: ICommodityItem[];
    }
  | {
      type: "SWITCHSHOWCART";
    }
  | {
      type: "SHOPPPING_CART_SET_QUANTITY";
      _id: string;
      quantity: number;
    }
  | {
      type: "SHOPPPING_DELETE_ITEM";
      _id: string;
    };

type MixStateAndDispatch = {
  state: StateType;
  dispatch?: Taro.Dispatch<ActionType>;
};

export const CommodityListContext = Taro.createContext<MixStateAndDispatch>({
  state: {
    shoppingCartItems: [],
    amountTotal: 0,
    commodityItems: [],
    isShowCart: false
  }
});

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SELECTED_COMMODITY_ITEM":
      return (({ shoppingCartItems }) => {
        const index = shoppingCartItems.findIndex(
          item => item._id === action.commodityItem!._id
        );
        if (index > -1) {
          shoppingCartItems[index].quantity++;
        } else {
          shoppingCartItems.push({ ...action.commodityItem!, quantity: 1 });
        }
        return {
          ...state,
          shoppingCartItems
        };
      })(state);
    case "LOAD_COMMODITY_ITEMS":
      return {
        ...state,
        commodityItems: action.commodityItems
      };
    case "SWITCHSHOWCART":
      return {
        ...state,
        isShowCart: !state.isShowCart
      };
    case "SHOPPPING_CART_SET_QUANTITY":
      return (({ shoppingCartItems }) => {
        const index = shoppingCartItems.findIndex(
          item => item._id == action._id
        );
        shoppingCartItems[index].quantity = action.quantity;
        return {
          ...state,
          shoppingCartItems
        };
      })(state);
    case "SHOPPPING_DELETE_ITEM":
      return (({ shoppingCartItems }) => {
        const index = shoppingCartItems.findIndex(
          item => item._id == action._id
        );
        shoppingCartItems.splice(index, 1);
        return {
          ...state,
          shoppingCartItems
        };
      })(state);
    default:
      return state;
  }
};
