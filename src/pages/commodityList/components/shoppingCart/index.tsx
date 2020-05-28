/* eslint-disable jsx-quotes */
import { AtIcon } from "taro-ui";
import Taro, { useContext } from "@tarojs/taro";
import { View, Checkbox } from "@tarojs/components";
import "./index.scss";
import ShoppingCartItem from "./shoppingCartItem";
import { CommodityListContext } from "../../reducer";

export default () => {
  const { dispatch } = useContext(CommodityListContext);
  return (
    <View className="shopping-cart">
      <View className="shopping-cart-head">
        <View className="shopping-cart-select-penal">
          <View>
            <Checkbox
              value="选中"
              checked
              className="shopping-cart-select-controller"
            />
          </View>
          <View className="shopping-cart-select-all">全选</View>
        </View>
        <View
          className="shopping-cart-clear"
          onClick={() => {
            dispatch &&
              dispatch({
                type: "SHOPPPING_CLEAR_ITEM"
              });

            dispatch &&
              dispatch({
                type: "SWITCHSHOWCART"
              });
          }}
        >
          <AtIcon value="bell" size="16" />
          清空购物车
        </View>
      </View>
      <View className="shopping-cart-content-penal">
        <ShoppingCartItem></ShoppingCartItem>
      </View>
    </View>
  );
};
