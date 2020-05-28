/* eslint-disable jsx-quotes */
import Taro, { useContext } from "@tarojs/taro";
import { View, Image, Checkbox } from "@tarojs/components";
import "./index.scss";
import Count from "../../counts";
import { CommodityListContext } from "../../../reducer";

const Index: Taro.FC = ({}) => {
  const { state, dispatch } = useContext(CommodityListContext);

  return (
    <View className="shopping-cart-content">
      {state.shoppingCartItems.map(item => {
        return (
          <View className="shopping-cart-content-item" key={item._id}>
            <View className="shopping-cart-content-item-selected">
              <Checkbox
                value="选中"
                checked
                className="shopping-cart-select-controller"
              />
            </View>
            <View className="shopping-cart-content-item-commodity">
              <Image
                src={item.images && item.images[0]}
                className="shopping-cart-content-item-commodity-image"
              />
            </View>
            <View className="shopping-cart-content-item-content">
              <View className="shopping-cart-content-item-name">
                {item.name}
              </View>
              <View className="shopping-cart-content-item-info">
                {item.specifications}
              </View>
              <View className="shopping-cart-content-item-foot">
                <View className="shopping-cart-content-item-amount">
                  ¥{item.price}
                </View>
                <View className="count-penal">
                  <Count
                    value={item.quantity}
                    onDecrease={() => {
                      dispatch &&
                        dispatch({
                          type: "SHOPPPING_CART_ITEM_DECREASE_QUANTITY",
                          item
                        });
                    }}
                    onIncrement={() => {
                      dispatch &&
                        dispatch({
                          type: "SHOPPPING_CART_ITEM_INCREMENT_QUANTITY",
                          item: {
                            ...item,
                            quantity: 1
                          }
                        });
                    }}
                  ></Count>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Index;
