import { View, Text } from "@tarojs/components";
import { usePullDownRefresh } from "@tarojs/taro";
import "./index.less";

const PullDownRefresh: React.FC = () => {
  usePullDownRefresh(() => {
    console.log(
      "π ~ file: index.tsx ~ line 8 ~ usePullDownRefresh ~ usePullDownRefresh"
    );
  });

  return (
    <View className="container">
      <Text>δΈζε·ζ°ι‘΅</Text>
    </View>
  );
};

export default PullDownRefresh;
