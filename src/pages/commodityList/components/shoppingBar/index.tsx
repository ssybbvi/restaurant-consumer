/* eslint-disable jsx-quotes */
import { AtIcon } from "taro-ui";
import Taro, { useContext } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import { CommodityListContext } from "../../reducer";

export default () => {
  const { state, dispatch } = useContext(CommodityListContext);

  return (
    <View className="shopping-bar">
      <View className="shopping-info">
        <View className="shopping-bag">
          <View className="shopping-total">
            {state.shoppingCartItems.reduce(
              (acc, item) => (acc += item.quantity),
              0
            )}
          </View>
          <AtIcon
            value="bell"
            onClick={() => {
              dispatch &&
                dispatch({
                  type: "SWITCHSHOWCART"
                });
            }}
          />
        </View>
        <View className="shopping-amount">¥ 1234.12</View>
        <View></View>
      </View>
      <View className="shopping-bar-action">结算</View>
    </View>
  );
};
