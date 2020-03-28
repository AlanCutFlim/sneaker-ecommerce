import Taro, { Component } from '@tarojs/taro'
import { View, Image, Label } from '@tarojs/components'
import './index.less'

import order_icon from './order_icon.png'
import right_icon from './right_icon.png'
export default class MineOrder extends Component {

  render () {
    return (
      <View className='mine-order'>
        <View className='header'>
          <View className='title-wrapper'>
            <Image className='order-icon' src={order_icon}></Image>
            <Label className='title'>购买</Label>
          </View>
          <View className='all-order-entry'>
            <View className='all-order'>全部订单</View>
            <Image className='right-icon' src={right_icon}></Image>
          </View>
        </View>
        <View className='content'></View>
      </View>
    )
  }
}