/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import { AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

export interface ICountProps {
  value: number;
  onDecrease: () => void;
  onIncrement: () => void;
}
// eslint-disable-next-line import/prefer-default-export
export default ({ value, onDecrease, onIncrement }: ICountProps) => {
  return (
    <View className="count">
      <View className="decrease">
        <AtIcon value="subtract-circle" onClick={onDecrease} />
      </View>
      <View className="number">{value}</View>
      <View className="increment">
        <AtIcon value="add-circle" onClick={onIncrement} />
      </View>
    </View>
  );
};
