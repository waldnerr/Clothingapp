import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { FlatList, Image, Touchable, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from "tailwind-react-native-classnames";

const data =[
    {
        id:"0",
        title:"Hat",
        image:"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/hat.png",
        screen:"HatScreen",
    },
    {
        id:"1",
        title:"Shirt",
        image:"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/shirt.png",
        screen:"ShirtScreen",
    },
    {
        id:"2",
        title:"Pants",
        image:"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/pants.png",
        screen:"PantsScreen",
    }, 
    {
        id:"3",
        title:"Shoes",
        image:"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/shoes.png",
        screen:"ShoeScreen",
    }
];




const ClothesOptions = () => {
    const navigation = useNavigation();
  return (
  
     <FlatList
     data ={data}
    
     keyExtractor={(item)=> item.id}
     renderItem={({item}) => (
        <TouchableOpacity 
        onPress={()=> navigation.navigate(item.screen)}
        style ={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image

                style={{width:120, height:120, resizeMode:"contain" }}
                source={{uri: item.image}}
                />
                <Text style = {tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                style={tw` p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright" color="white" type='antdesign'
                />


            </View>
         
        </TouchableOpacity> 
        
        )}
     
     />  
   

  );
};

export default ClothesOptions;

