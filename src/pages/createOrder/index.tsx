/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import Taro, { useEffect, useContext, useReducer } from "@tarojs/taro";
import { AtFloatLayout, AtFab, AtIcon } from "taro-ui";
import { View, Image } from "@tarojs/components";

import "./index.scss";
import { OrderItems } from "./components/OrderItems";
//import { reducer } from "./reducer";

// eslint-disable-next-line import/prefer-default-export
export const Index = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   shoppingCartItems: JSON.parse(Taro.getStorageSync("shopping-cart-items"))
  // });

  useEffect(() => {}, []);

  return (
    <View className="main">
      <View className="content">
        <View className="commodity-name">商品列表</View>
        <View className="commoditys">
          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />

          <Image
            className="item"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
        </View>
        <View className="coupons">
          <View>优惠券</View>
          <View>
            暂无可用优惠券 <AtIcon value="chevron-right"></AtIcon>
          </View>
        </View>
        <View className="remark">
          <View>备注</View>
          <View>
            不用放辣 <AtIcon value="chevron-right"></AtIcon>
          </View>
        </View>
        <View className="result">
          <View className="item">一共¥1345.24</View>
          <View className="item">优惠了¥134.24</View>
        </View>
      </View>
      <View className="paymentInfo">
        <View>支付方式</View>
        <View>
          <AtIcon value="money"></AtIcon>微信
        </View>
      </View>
      <View className="payment-penal">
        <View className="summary">
          <View className="label">合计</View>
          <View className="amount">¥1234.45</View>
        </View>
        <View className="action">支付</View>
      </View>
    </View>
  );
};
