/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

interface IClassificationItem {
  name: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Classification: Taro.FC = ({}) => {
  const [classificationList, setClassificationList] = useState<
    IClassificationItem[]
  >([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setClassificationList([
      {
        name: "aaa"
      },
      {
        name: "bbb"
      },
      {
        name: "ccc"
      },
      {
        name: "ddd"
      },
      {
        name: "eee"
      },
      {
        name: "fff"
      },
      {
        name: "ggg"
      },
      {
        name: "hhh"
      },
      {
        name: "iii"
      },
      {
        name: "jjj"
      },
      {
        name: "kkk"
      },
      {
        name: "mmm"
      },
      {
        name: "zzz"
      },
      {
        name: "vvv"
      },
      {
        name: "nnn"
      },
      {
        name: "ooo"
      },
      {
        name: "ppp"
      },
      {
        name: "uuu"
      },
      {
        name: "www"
      }
    ]);
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
            className={`classification-item ${
              item.name == current ? "classification-current" : ""
            }`}
          >
            {item.name}
          </View>
        );
      })}
    </View>
  );
};
