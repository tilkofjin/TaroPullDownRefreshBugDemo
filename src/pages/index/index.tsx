import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

const Index:React.FC = () => {
  return (
    <View className='index' onClick={() => {
      Taro.navigateTo({
        url: `/pages/pullDown/index`
      })
    }}>
      <Text>Hello world!</Text>
    </View>
  )
}
export default Index