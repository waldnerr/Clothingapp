import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,FlatList } from 'react-native';

import tw from "tailwind-react-native-classnames";
const data =[
    {
        "Id":0,
        "Name":"Dunk High 1985 'Black Acid Wash'",
        "Brand": "Nike",
        "Color":["Yellow","White","Black"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/acid.png",

    },
    {
        "Id":1,
        "Name":"Dunk High 'Vast Grey'",
        "Brand": "Nike",
        "Color":["Grey","White"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/vast.webp",
    },
    {
        "Id":2,
        "Name":"NBA x Air Force 1 Low 'Midnight Navy'",
        "Brand": "Nike",
        "Color":["Navy","White","Black"],
        "Type":"Air Force 1s",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/mid.png",
    },
    {
        "Id":3,
        "Name":"Richard Mulder x SB Dunk High 'Richard Mulder'",
        "Brand": "Nike",
        "Color":["Blue","White"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/muld.png",
    },
    {
        "Id":4,
        "Name":"Yeezy Boost 350 V2 'Cream White / Triple White'",
        "Brand": "Addias",
        "Color":["White"],
        "Type":"Yeezy Boost",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/yewhit.webp",
    },
    {
        "Id":5,
        "Name":"Dunk High Premium SB 'Northern Lights'",
        "Brand": "Nike",
        "Color":["Pink","Black","Green"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/north.png",
    },
    {
        "Id":6,
        "Name":"Dunk Low 'University Blue'",
        "Brand": "Nike",
        "Color":["Blue","White"],
        "Type":"Low Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/uni.png",
    },
    {
        "Id":7,
        "Name":"Dunk Low 'Michigan State'",
        "Brand": "Nike",
        "Color":["Green","White"],
        "Type":"Low Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/st.png",
    },
    {
        "Id":8,
        "Name":"Blazer Low '77 Vintage 'White Black'",
        "Brand": "Nike",
        "Color":["White","Black"],
        "Type":"Low Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/blaz.png",
    },
    {
        "Id":9,
        "Name":"Dunk High 'Premium Vegas Gold | Bison-White'",
        "Brand": "Nike",
        "Color":["White","Tan","Gold"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/bison.png",
    },
    {
        "Id":10,
        "Name":"Notre x Dunk High 'Midnight Navy'",
        "Brand": "Nike",
        "Color":["Navy","White","Black"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/nav.webp",
    },
    {
        "Id":11,
        "Name":"Dunk High SB 'Hawaii'",
        "Brand": "Nike",
        "Color":["Blue","Pink","White"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/Haw.webp",
    },
    {
        "Id":12,
        "Name":"Diamond Supply Co. x Dunk High Premium SB 'Tiffany'",
        "Brand": "Nike",
        "Color":["Teal","Black","Silver"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/tiff.png",
    },
    {
        "Id":13,
        "Name":"Air Max 90 'Latino Heritage Month - Familia'",
        "Brand": "Nike",
        "Color":["Muticolor"],
        "Type":"Air max",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/fam.png",
    },
    {
        "Id":14,
        "Name":"Dunk High Premium SB 'Twin Peaks'",
        "Brand": "Nike",
        "Color":["Blue","White","Green"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/twin.png",
    },
    {
        "Id":15,
        "Name":"Dunk High Pro SB 'Ghost'",
        "Brand": "Nike",
        "Color":["Green","White"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/ghost.png",
    },
    {
        "Id":16,
        "Name":"AF1 Whites",
        "Brand": "Nike",
        "Color":["White"],
        "Type":"Air Force 1s",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/af1.png",
    },
    {
        "Id":17,
        "Name":"Toro Brovos",
        "Brand": "Jordan",
        "Color":["Red"],
        "Type":"Mids",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/toro.png",
    },
    {
        "Id":18,
        "Name":"Air Jordan 1 Anodized GS 'University Blue'",
        "Brand": "Jordan",
        "Color":["Blue"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/blue.png",
    },
    {
        "Id":19,
        "Name":"Air Jordan 11 Retro 'Bred' 2019",
        "Brand": "Jordan",
        "Color":["Blue"],
        "Type":"High Top",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/bred.png",
    },
    {
        "Id":20,
        "Name":"Yeezy Slides 'Pure' 2021 Re-Release",
        "Brand": "Addias",
        "Color":["Tan"],
        "Type":"Slides",
        "image":"https://raw.githubusercontent.com/waldnerr/Clothingapp/main/assets/Shoes/slide.png",
    }





];

const Shoes = () => {
    const navigation =useNavigation();
  return (
   
    <FlatList
    data ={data}
   
    keyExtractor={(item)=> item.id}
    renderItem={({item}) => (
       <View>
               <Image

               style={{width:150, height:100 }}
               source={{uri: item.image}}
               />
               <Text style = {tw `mt-2 text-lg font-semibold`}>{item.Name}</Text>
               


           </View>
        
       
       )}
    
    />  
  

  )
}

export default Shoes

const styles = StyleSheet.create({})