import Taro from "@tarojs/taro";

export type StateType = {
  shoppingCartItems: IShoppingCartItem[];
  commodityItems: ICommodityItem[];
  amountTotal: number;
  isShowCart: boolean;
  currentCommodity?: ICommodityItem;
};

type ActionType =
  | {
      type: "SELECTED_COMMODITY_ITEM";
      item: ICommodityItem | null;
    }
  | {
      type: "LOAD_COMMODITY_ITEMS";
      commodityItems: ICommodityItem[];
    }
  | {
      type: "SWITCHSHOWCART";
    }
  | {
      type: "SHOPPPING_CART_ITEM_INCREMENT_QUANTITY";
      item: IShoppingCartItem;
    }
  | {
      type: "SHOPPPING_CART_ITEM_DECREASE_QUANTITY";
      item: IShoppingCartItem;
    }
  | {
      type: "SHOPPPING_DELETE_ITEM";
      _id: string;
    }
  | {
      type: "SHOPPPING_CLEAR_ITEM";
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
      return (({}) => {
        return {
          ...state,
          currentCommodity: action.item
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
    case "SHOPPPING_CART_ITEM_INCREMENT_QUANTITY":
      return (({ shoppingCartItems }) => {
        const shoppingCartItem = shoppingCartItems.find(
          item => item.skuId == action.item.skuId
        );
        if (shoppingCartItem) {
          shoppingCartItem.quantity += action.item.quantity;
        } else {
          shoppingCartItems.push(action.item);
        }

        return {
          ...state,
          shoppingCartItems
        };
      })(state);
    case "SHOPPPING_CART_ITEM_DECREASE_QUANTITY":
      return (({ shoppingCartItems }) => {
        const shoppingCartIndex = shoppingCartItems.findIndex(
          item => item.skuId == action.item.skuId
        );
        if (shoppingCartIndex > -1) {
          shoppingCartItems[shoppingCartIndex].quantity--;
          if (shoppingCartItems[shoppingCartIndex].quantity == 0) {
            shoppingCartItems.splice(shoppingCartIndex, 1);
          }
        }

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

    case "SHOPPPING_CLEAR_ITEM":
      return (() => {
        return {
          ...state,
          shoppingCartItems: []
        };
      })();
    default:
      return state;
  }
};
