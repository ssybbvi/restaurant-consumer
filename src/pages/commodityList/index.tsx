/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import "./index.scss";
import Taro, { useEffect, useReducer } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Classification } from "./components/classification";
import CommodityList from "./components/commodityList";
import TabFoot from "../../components/tabFoot";
import Details from "./components/details";
import { CommodityListContext, reducer } from "./reducer";

import ShoppingCart from "./components/shoppingCart";
import ShoppingBar from "./components/shoppingBar";
import { getCommodityList } from "../../../src/api";

// eslint-disable-next-line import/prefer-default-export
export const Index = () => {
  const [state, dispatch] = useReducer(reducer, {
    shoppingCartItems: [],
    commodityItems: [],
    amountTotal: 0,
    isShowCart: false
  });

  useEffect(() => {
    (async () => {
      const commodityList = await getCommodityList();
      dispatch &&
        dispatch({
          type: "LOAD_COMMODITY_ITEMS",
          commodityItems: commodityList
        });
    })();
  }, []);

  return (
    <CommodityListContext.Provider value={{ state, dispatch }}>
      <View className="main">
        <View className="content">
          <View className="classfication-penal">
            <Classification></Classification>
          </View>
          <View className="commodity-penal">
            <CommodityList></CommodityList>
          </View>
        </View>

        {state.currentCommodity ? (
          <View className="details-penal">
            <Details></Details>
          </View>
        ) : null}

        {state.isShowCart ? (
          <View className="shopping-cart-penal">
            <ShoppingCart></ShoppingCart>
          </View>
        ) : null}

        {state.shoppingCartItems && state.shoppingCartItems.length ? (
          <View className="shopping-bar-penal">
            <ShoppingBar></ShoppingBar>
          </View>
        ) : null}

        <View className="tab-foot-penal">
          <TabFoot></TabFoot>
        </View>
      </View>
    </CommodityListContext.Provider>
  );
};
