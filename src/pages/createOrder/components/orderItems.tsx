/* eslint-disable jsx-quotes */
import { AtIcon } from "taro-ui";
import Taro, { useContext } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { CreateOrderContext } from "../reducer";

export interface ICommodityItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  fakePrice: string;
  type: string;
}

// eslint-disable-next-line import/prefer-default-export
export const OrderItems: Taro.FC = () => {
  const { state, dispatch } = useContext(CreateOrderContext);
  console.log("xxx", state);
  return (
    <View className="commodity-list">
      {state.shoppingCartItems.map(item => {
        return (
          <View className="at-row commodity-item" key={item._id}>
            <View className="at-col at-col-4  ">
              <Image src={item.image} className="commodity-image" />
            </View>
            <View className="at-col at-col-8 commodity-summary   ">
              <View className="commodity-name  at-col--wrap ">{item.name}</View>
              <View className="at-row  at-row__justify--around">
                <View className="at-col price  at-col-5   at-row__justify--center">
                  ¥{item.price}
                </View>
                <View className="at-row icon-circle  at-col-2"></View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
