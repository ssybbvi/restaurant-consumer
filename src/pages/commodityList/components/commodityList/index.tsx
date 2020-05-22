/* eslint-disable jsx-quotes */
import { AtIcon } from "taro-ui";
import Taro, { useContext } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { CommodityListContext } from "../../reducer";

import "./index.scss";
// eslint-disable-next-line import/prefer-default-export
export const CommodityList: Taro.FC = () => {
  const { state, dispatch } = useContext(CommodityListContext);

  return (
    <View className="commoditys">
      <View className="commoditys-item">
        <View className="image-panel">
          <Image
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            className="image"
          />
        </View>
        <View className="info-panel">
          <View className="name">我是商品名称</View>
          <View className="dispcription">
            <View className="dispcription-item">2</View>
            <View className="dispcription-item">1</View>
          </View>
          <View className="price-action">
            <View className="price"> ¥1234.43</View>
            <View className="action">选规格</View>
          </View>
        </View>
      </View>

      <View className="commoditys-item">
        <View className="image-panel">
          <Image
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            className="image"
          />
        </View>
        <View className="info-panel">
          <View className="name">我是商品名称</View>
          <View className="dispcription">
            <View className="dispcription-item">1</View>
            <View className="dispcription-item">2</View>
          </View>
          <View className="price-action">
            <View className="price"> ¥1234.43</View>
            <View className="action">选规格</View>
          </View>
        </View>
      </View>
    </View>
  );
};
