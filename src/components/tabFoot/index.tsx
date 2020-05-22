/* eslint-disable jsx-quotes */
import Taro, { useEffect } from "@tarojs/taro";
import { AtIcon } from "taro-ui";
import { View } from "@tarojs/components";

import "./index.scss";
//import { reducer } from "./reducer";

const TabFoot = () => {
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
    <View className="tab-foot">
      <View className="tab-foot-item">
        <View>
          <AtIcon value="bell" />
          <View className="name">首页</View>
        </View>
      </View>
      <View className="tab-foot-item">
        <View>
          <AtIcon value="bell" />
          <View className="name">首页</View>
        </View>
      </View>
      <View className="tab-foot-item">
        <View>
          <AtIcon value="bell" />
          <View className="name">首页</View>
        </View>
      </View>
      <View className="tab-foot-item">
        <View>
          <AtIcon value="bell" />
          <View className="name">首页</View>
        </View>
      </View>
    </View>
  );
};

export default TabFoot;
