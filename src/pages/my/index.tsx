/* eslint-disable jsx-quotes */
import Taro, { useEffect, useContext, useReducer } from "@tarojs/taro";
import { AtFloatLayout, AtFab, AtIcon, AtListItem, AtList } from "taro-ui";
import { View, Image } from "@tarojs/components";
import TabFoot from "../../components/tabFoot";
import "./index.scss";

export default () => {
  return (
    <View className="main">
      <View className="pages">
        <View className="page">
          <View className="page-name">会员码</View>
          <View>
            <AtIcon value="chevron-right"></AtIcon>
          </View>
        </View>
        <View className="page">
          <View className="page-name">会员码</View>
          <View>
            <AtIcon value="chevron-right"></AtIcon>
          </View>
        </View>
        <View className="page none-border-bottom">
          <View className="page-name">会员码</View>
          <View>
            <AtIcon value="chevron-right"></AtIcon>
          </View>
        </View>
      </View>

      <View className="tab-foot-penal">
        <TabFoot></TabFoot>
      </View>
    </View>
  );
};
