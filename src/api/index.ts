import Taro from "@tarojs/taro";

Taro.addInterceptor(chain => {
  chain.requestParams.header = {
    "authorization-tenant": "d5d2ebc3-6f0e-48fd-a770-1c9a32ea2af7"
  };

  return chain.proceed(chain.requestParams).then(res => {
    return res;
  });
});

const getCaregory = async (): Promise<ICategoryItem[]> => {
  return new Promise(resolve => {
    Taro.request({
      url: "http://127.0.0.1:5000/api/v1/category",
      success: res => {
        const result = res.data.map(item => {
          return {
            _id: item._id,
            name: item.name
          };
        });
        resolve(result);
      }
    });
  });
};

const getCommodityList = async (): Promise<ICommodityItem[]> => {
  return new Promise(resolve => {
    Taro.request({
      url: "http://127.0.0.1:5000/api/v1/commodity",
      success: res => {
        resolve(res.data.commoditys);
      }
    });
  });
};

export { getCaregory, getCommodityList };
