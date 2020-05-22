/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import Taro, { useEffect, useContext, useReducer } from "@tarojs/taro";
import { AtFloatLayout, AtFab, AtIcon, AtListItem, AtList } from "taro-ui";
import { View, Image } from "@tarojs/components";

import "./index.scss";
//import { reducer } from "./reducer";

// eslint-disable-next-line import/prefer-default-export
export const Index = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   shoppingCartItems: JSON.parse(Taro.getStorageSync("shopping-cart-items"))
  // });

  useEffect(() => {
    // dispatch &&
    //   dispatch({
    //     type: "LOAD_COMMODITY_ITEMS",
    //     commodityItems: result
    //   });
  }, []);

  return (
    <View>
      <View className="list">
        <View className="item">
          <View className="top">
            <View className="title">头部文字</View>
            <View className="status">订单状态 》</View>
          </View>
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
          <View className="content">
            <View className="info">
              <View className="createAt">下单时间：2019-09-03 14:24:34</View>
              <View className="createAt">
                订单编号：33373932363730372e706e67
              </View>
            </View>
            <View className="amount">¥1345.13</View>
          </View>
          <View className="actions">
            <View className="action">动作A</View>
            <View className="action">动作B</View>
            <View className="action">动作C</View>
          </View>
        </View>

        <View className="item">
          <View className="top">
            <View className="title">头部文字</View>
            <View className="status">
              订单状态 <AtIcon value="chevron-right"></AtIcon>
            </View>
          </View>
          <View className="commoditys">
            <Image
              className="item"
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
            <Image
              className="item"
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
          </View>
          <View className="content">
            <View className="info">
              <View className="createAt">下单时间：2019-09-03 14:24:34</View>
              <View className="createAt">
                订单编号：33373932363730372e706e67
              </View>
            </View>
            <View className="amount">¥1345.13</View>
          </View>
          <View className="actions">
            <View className="action">动作A</View>
            <View className="action">动作B</View>
            <View className="action">动作C</View>
          </View>
        </View>
      </View>
    </View>
  );
};
