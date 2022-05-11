import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView style ={tw`bg-red-3 h-full`}>
        <View style={tw`p-5`}>
            <image 
                style={{
                    width:100,
                    height:100,
                    resizeMode: "contain"

                }}
                source={{

                    uri: "/imgs/wlogo.png "
                }}
            
            />
        </View>
      <Text style={[tw `text-blue-500 p-10`]}>This is the Home Screen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:"blue",
    },


});