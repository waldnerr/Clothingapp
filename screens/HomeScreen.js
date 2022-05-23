import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import ClothesOptions from '../components/ClothesOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style ={tw `bg-white h-full`}>
        <View style={tw`p-5`}>
             <Image 
                style={{
                    
                    width:100,
                    height:100,
                    resizeMode: "contain",

                }}
                source={{
                    uri: "https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/wlogo.png",
                }}/>    
              
               <ClothesOptions/>

        </View>
     
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text:{
        color:"blue",
    },


});