/* eslint-disable jsx-quotes */
import { AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import { View, Image, Checkbox } from "@tarojs/components";
import "./index.scss";

const Index: Taro.FC = ({}) => {
  return (
    <View className="shopping-cart-content">
      <View className="shopping-cart-content-item">
        <View className="shopping-cart-content-item-selected">
          <Checkbox
            value="选中"
            checked
            className="shopping-cart-select-controller"
          />
        </View>
        <View className="shopping-cart-content-item-commodity">
          <Image
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            className="shopping-cart-content-item-commodity-image"
          />
        </View>
        <View className="shopping-cart-content-item-content">
          <View className="shopping-cart-content-item-name">加薪面包</View>
          <View className="shopping-cart-content-item-info">
            撒发送到发送撒发送到发送
          </View>
          <View className="shopping-cart-content-item-foot">
            <View className="shopping-cart-content-item-amount">¥1234.56</View>
            <View className="shopping-cart-content-item-quantity">
              <View className="shopping-cart-content-item-decrease">
                <AtIcon value="subtract-circle" />
              </View>
              <View className="shopping-cart-content-item-number">1</View>
              <View className="shopping-cart-content-item-increment">
                <AtIcon value="add-circle" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
