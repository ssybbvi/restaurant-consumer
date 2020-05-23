/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import Taro, { useEffect, useContext, useReducer } from "@tarojs/taro";
import { AtFloatLayout, AtFab, AtIcon } from "taro-ui";
import { View, Text } from "@tarojs/components";
import { Classification } from "./components/classification";
import { CommodityList } from "./components/commodityList";
import TabFoot from "../../components/tabFoot";
import ShoppingBar from "./components/shoppingBar";
import ShoppingCart from "./components/shoppingCart";
import Details from "./components/details";
import { CommodityListContext, reducer } from "./reducer";

import "./index.scss";
// import { ShoppingCart } from "./components/shoppingCart";
// import { ShoppingCartSummary } from "./components/shoppingCartSummary";

// eslint-disable-next-line import/prefer-default-export
export const Index = () => {
  const [state, dispatch] = useReducer(reducer, {
    shoppingCartItems: [],
    commodityItems: [],
    amountTotal: 0,
    isShowCart: false
  });

  useEffect(() => {
    // Taro.request({
    //   url: "http://test-jifenyuedui.ixald.com/api/v1/commodity",
    //   success: function(res) {
    //     console.log(res.data);
    //     const result = res.data.commoditys.map(item => {
    //       return {
    //         _id: item._id,
    //         name: item.name,
    //         price: item.price,
    //         image: item.images && item.images[0],
    //         fakePrice: item.fakePrice,
    //         type: item.type
    //       };
    //     });
    //     dispatch &&
    //       dispatch({
    //         type: "LOAD_COMMODITY_ITEMS",
    //         commodityItems: result
    //       });
    //   }
    // });
  }, []);

  const goCreateOrder = () => {
    Taro.setStorageSync(
      "shopping-cart-items",
      JSON.stringify(state.shoppingCartItems)
    );
    Taro.navigateTo({
      url: "/pages/createOrder/index"
    });
  };

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
        {/* <View className="details-penal">
          <Details></Details>
        </View> */}
        {/* <View className="shopping-cart-penal">
          <ShoppingCart></ShoppingCart>
          <ShoppingBar></ShoppingBar>
        </View> */}
        <View className="tab-foot-penal">
          <TabFoot></TabFoot>
        </View>
      </View>
    </CommodityListContext.Provider>
  );
};
