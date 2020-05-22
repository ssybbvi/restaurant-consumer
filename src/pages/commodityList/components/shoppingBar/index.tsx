/* eslint-disable jsx-quotes */
import { AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

const Index: Taro.FC = ({}) => {
  return (
    <View className="shopping-bar">
      <View className="shopping-info">
        <View className="shopping-bag">
          <View className="shopping-total">2</View>
          <AtIcon value="bell" />
        </View>
        <View className="shopping-amount">¥ 1234.12</View>
        <View></View>
      </View>
      <View className="shopping-bar-action">结算</View>
    </View>
  );
};

export default Index;
