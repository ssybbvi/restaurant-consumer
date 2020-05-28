/* eslint-disable jsx-quotes */
/* eslint-disable react/no-multi-comp */

import { AtIcon } from "taro-ui";
import Taro, { useContext } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { CommodityListContext } from "../../reducer";
import Count from "../counts";
import "./index.scss";

export default () => {
  const { state, dispatch } = useContext(CommodityListContext);

  const commodityIncreate = (item: IShoppingCartItem) => {
    dispatch &&
      dispatch({
        type: "SHOPPPING_CART_ITEM_INCREMENT_QUANTITY",
        item
      });
  };

  const commodityDecrease = (item: IShoppingCartItem) => {
    dispatch &&
      dispatch({
        type: "SHOPPPING_CART_ITEM_DECREASE_QUANTITY",
        item
      });
  };

  const actionPenal = (item: ICommodityItem) => {
    if (item.skus.length === 0) {
      return <View>sku is null</View>;
    }

    const skuId = item.skus[0]._id;
    const shoppingCartItem = state.shoppingCartItems.find(
      findItem => findItem.skuId === skuId
    );

    if (item.skus.length === 1) {
      if (shoppingCartItem) {
        return (
          <View className="count-penal">
            <Count
              value={shoppingCartItem.quantity}
              onDecrease={() => {
                commodityDecrease(shoppingCartItem);
              }}
              onIncrement={() => {
                commodityIncreate(shoppingCartItem);
              }}
            ></Count>
          </View>
        );
      } else {
        return (
          <View
            className="increment"
            onClick={() => {
              commodityIncreate({
                ...item,
                quantity: 1,
                skuId,
                specifications: "",
                price: item.skus[0].price
              });
            }}
          >
            <AtIcon value="add-circle" />
          </View>
        );
      }
    }

    return (
      <View
        className="action"
        onClick={() => {
          dispatch &&
            dispatch({
              type: "SELECTED_COMMODITY_ITEM",
              item
            });
        }}
      >
        选规格
        {shoppingCartItem ? (
          <View className="right-count">{shoppingCartItem.quantity}</View>
        ) : null}
      </View>
    );
  };

  return (
    <View className="commoditys">
      {state.commodityItems.map(item => {
        return (
          <View className="commoditys-item" key={item._id}>
            <View className="image-panel">
              <Image src={item.images && item.images[0]} className="image" />
            </View>
            <View className="info-panel">
              <View className="name">{item.name}</View>
              <View className="dispcription">
                {/* <View className="dispcription-item">2</View>
                <View className="dispcription-item">1</View> */}
              </View>
              <View className="price-action">
                <View className="price">
                  ¥
                  {Math.min.apply(
                    null,
                    item.skus.map(mapItem => mapItem.price)
                  )}
                </View>
                {actionPenal(item)}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
