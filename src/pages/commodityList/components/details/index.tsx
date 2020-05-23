/* eslint-disable jsx-quotes */
import Taro, { useEffect, useContext, useReducer } from "@tarojs/taro";
import { AtFloatLayout, AtFab, AtIcon, AtListItem, AtList } from "taro-ui";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import TabFoot from "../../components/tabFoot";
import "./index.scss";

export default () => {
  return (
    <View className="details">
      <View className="detail-header">
        <AtIcon value="share" className="details-share" />
        <AtIcon value="close-circle" className="details-close" />
      </View>
      <View className="detail-commodity-images">
        <Swiper
          className="details-swiper"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image
              src="https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"
              className="details-swiper-image"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              src="https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180"
              className="details-swiper-image"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              src="https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"
              className="details-swiper-image"
            />
          </SwiperItem>
        </Swiper>
      </View>
      <View className="details-content">
        <View className="details-name">多肉葡萄</View>
        <View className="details-tags"></View>
        <View className="details-description-title">产品描述</View>
        <View className="details-description">
          我是长跑史蒂夫老公无法隋东风电风扇公司发的是隋东风森德罗斯范文芳了第三方的身份四分五裂发顺丰第三方史蒂夫乐山大佛
        </View>
        <View className="details-attributes">
          <View className="details-attribute-item">
            <View className="details-attribute-name">口味：</View>
            <View className="details-specifications">
              <View className="details-specification">热</View>
              <View className="details-specification details-specification-current">
                温
              </View>
            </View>
          </View>
          <View className="details-attribute-item">
            <View className="details-attribute-name">口味：</View>
            <View className="details-specifications">
              <View className="details-specification">热</View>
              <View className="details-specification">温</View>
            </View>
          </View>
        </View>
        <View className="details-attributes">
          <View className="details-attribute-item">
            <View className="details-attribute-name">口味：</View>
            <View className="details-specifications">
              <View className="details-specification">热</View>
              <View className="details-specification details-specification-current">
                温
              </View>
            </View>
          </View>
          <View className="details-attribute-item">
            <View className="details-attribute-name">口味：</View>
            <View className="details-specifications">
              <View className="details-specification">热</View>
              <View className="details-specification">温</View>
            </View>
          </View>
        </View>
        <View className="details-attributes">
          <View className="details-attribute-item">
            <View className="details-attribute-name">口味：</View>
            <View className="details-specifications">
              <View className="details-specification">热</View>
              <View className="details-specification details-specification-current">
                温
              </View>
            </View>
          </View>
          <View className="details-attribute-item">
            <View className="details-attribute-name">口味：</View>
            <View className="details-specifications">
              <View className="details-specification">热</View>
              <View className="details-specification">温</View>
            </View>
          </View>
        </View>
      </View>

      <View className="details-foot">
        <View className="details-foot-summary">
          <View className="details-foot-summary-container">
            <View className="deital-foot-amount">¥1234.34</View>
            <View className="details-foot-description">
              打发打发打发打发打发打发打发打发打
            </View>
          </View>
          <View className="details-foot-quantity">
            <View className="details-foot-quantity-decrease">
              <AtIcon value="subtract-circle" />
            </View>
            <View className="details-foot-quantity-number">1</View>
            <View className="details-foot-quantity-increment">
              <AtIcon value="add-circle" />
            </View>
          </View>
        </View>
        <View className="details-foot-action">加入购物袋</View>
      </View>
    </View>
  );
};
