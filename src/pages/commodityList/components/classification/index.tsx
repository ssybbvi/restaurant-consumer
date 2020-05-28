/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import { getCaregory } from "../../../../api";

// eslint-disable-next-line import/prefer-default-export
export const Classification: Taro.FC = ({}) => {
  const [classificationList, setClassificationList] = useState<ICategoryItem[]>(
    []
  );
  const [current, setCurrent] = useState("");

  useEffect(() => {
    (async () => {
      const categoryList = await getCaregory();
      setClassificationList(categoryList);
    })();
  }, []);

  return (
    <View className="classification">
      {classificationList.map(item => {
        return (
          <View
            onClick={() => {
              setCurrent(item.name);
            }}
            key={item.name}
            className={`item ${item.name == current ? "current" : ""}`}
          >
            {item.name}
          </View>
        );
      })}
    </View>
  );
};
