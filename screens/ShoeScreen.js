import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Shoes from '../components/Shoes';

const ShoeScreen = () => {
  return (
    <View>
      <Text>SHOE SCREEN</Text>
    <View style ={tw`h-1/2`}>
      <Shoes/>

    </View>
    <View style ={tw`h-1/2`}></View>
    </View>

  )
}

export default ShoeScreen

const styles = StyleSheet.create({})