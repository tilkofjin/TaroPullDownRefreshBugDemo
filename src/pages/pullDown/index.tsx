import { View, Text } from "@tarojs/components";
import { usePullDownRefresh } from "@tarojs/taro";
import "./index.less";

const PullDownRefresh: React.FC = () => {
  usePullDownRefresh(() => {
    console.log(
      "🚀 ~ file: index.tsx ~ line 8 ~ usePullDownRefresh ~ usePullDownRefresh"
    );
  });

  return (
    <View className="container">
      <Text>下拉刷新页</Text>
    </View>
  );
};

export default PullDownRefresh;
