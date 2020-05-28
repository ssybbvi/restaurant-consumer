/* eslint-disable jsx-quotes */
import Taro, { useContext, useState } from "@tarojs/taro";
import { AtIcon } from "taro-ui";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";
import Count from "../counts";
import { CommodityListContext } from "../../reducer";

export default () => {
  const { state, dispatch } = useContext(CommodityListContext);

  const [sku, setSku] = useState<ISkuDto>(state.currentCommodity!.skus[0]);

  const [count, setCount] = useState<number>(1);

  const specificationIdsJoin = (specificationIds: string[]) => {
    return specificationIds.sort().join("*");
  };

  const selectedSpecification = (
    attributeId: string,
    specificationId: string
  ) => {
    const specificationids = sku.combines
      .filter(findItem => findItem.attributeId != attributeId)
      .map(mapItem => mapItem.specificationId);
    specificationids.push(specificationId);
    const specificationidstr = specificationIdsJoin(specificationids);

    const selectedSku = state.currentCommodity!.skus.find(
      itemFind =>
        specificationIdsJoin(
          itemFind.combines.map(mapItem => mapItem.specificationId)
        ) == specificationidstr
    );
    if (selectedSku) {
      setSku(selectedSku);
    }
  };

  const displaySpecificationClassName = (
    attributeItem: IAttributeDto,
    specificationItem: ISpecificationDto
  ) => {
    let classNnames = ["details-specification"];

    if (
      sku.combines.some(
        someItem => someItem.specificationId == specificationItem._id
      )
    ) {
      classNnames.push("details-specification-current");
    }

    const specificationIdsStrList = state.currentCommodity!.skus.map(
      mapItem => {
        const specificationIds = mapItem.combines.map(
          combinesMapItem => combinesMapItem.specificationId
        );
        return specificationIdsJoin(specificationIds);
      }
    );

    const specifications = sku.combines
      .filter(filterItem => filterItem.attributeId != attributeItem._id)
      .map(mapItem => mapItem.specificationId);
    specifications.push(specificationItem._id);
    let specificationStr = specificationIdsJoin(specifications);

    if (
      !specificationIdsStrList.some(someItem => someItem == specificationStr)
    ) {
      classNnames.push("details-specification-disble");
    }

    return classNnames.join(" ");
  };

  const displayAttributes = () => {
    return state.currentCommodity!.attributes.map(attributeItem => {
      return (
        <View className="details-attribute-item" key={attributeItem._id}>
          <View className="details-attribute-name">{attributeItem.name}：</View>
          <View className="details-specifications">
            {attributeItem.specifications.map(specificationItem => {
              return (
                <View
                  className={displaySpecificationClassName(
                    attributeItem,
                    specificationItem
                  )}
                  key={specificationItem._id}
                  onClick={() => {
                    selectedSpecification(
                      attributeItem._id,
                      specificationItem._id
                    );
                  }}
                >
                  {specificationItem.name}
                </View>
              );
            })}
          </View>
        </View>
      );
    });
  };

  return (
    <View className="details">
      <View className="detail-header">
        <AtIcon value="share" className="details-share" />
        <AtIcon
          value="close-circle"
          className="details-close"
          onClick={() => {
            dispatch &&
              dispatch({
                type: "SELECTED_COMMODITY_ITEM",
                item: null
              });
          }}
        />
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
          {state.currentCommodity!.images &&
            state.currentCommodity!.images.map(imageItem => {
              return (
                <SwiperItem key={imageItem}>
                  <Image src={imageItem} className="details-swiper-image" />
                </SwiperItem>
              );
            })}
        </Swiper>
      </View>
      <View className="details-content">
        <View className="details-name">{state.currentCommodity!.name}</View>
        <View className="details-tags"></View>
        <View className="details-description-title">产品描述</View>
        <View className="details-description">
          我是长跑史蒂夫老公无法隋东风电风扇公司发的是隋东风森德罗斯范文芳了第三方的身份四分五裂发顺丰第三方史蒂夫乐山大佛
        </View>
        <View className="details-attributes">{displayAttributes()}</View>
      </View>

      <View className="details-foot">
        <View className="details-foot-summary">
          <View className="details-foot-summary-container">
            <View className="deital-foot-amount">¥{sku.price}</View>
            <View className="details-foot-description">
              打发打发打发打发打发打发打发打发打
            </View>
          </View>
          <View className="count-peanl">
            <Count
              value={count}
              onDecrease={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
              onIncrement={() => {
                setCount(count + 1);
              }}
            ></Count>
          </View>
        </View>
        <View
          className="details-foot-action"
          onClick={() => {
            dispatch &&
              dispatch({
                type: "SHOPPPING_CART_ITEM_INCREMENT_QUANTITY",
                item: {
                  ...state.currentCommodity!,
                  quantity: count,
                  skuId: sku._id,
                  specifications: "",
                  price: sku.price
                }
              });

            dispatch &&
              dispatch({
                type: "SELECTED_COMMODITY_ITEM",
                item: null
              });
          }}
        >
          加入购物袋
        </View>
      </View>
    </View>
  );
};
