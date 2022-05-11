import React from 'react';
import { Text, View } from 'react-native';
import { FlatList, Touchable, TouchableOpacity } from 'react-native';

const data =[
    {
        id:"0",
        title:"Hat",
        image:"#",
        screen:"HatScreen",
    },
    {
        id:"1",
        title:"Shirt",
        image:"#",
        screen:"ShirtScreen",
    },
    {
        id:"2",
        title:"Pants",
        image:"#",
        screen:"PantsScreen",
    }, 
    {
        id:"3",
        title:"Shoes",
        image:"#",
        screen:"ShoeScreen",
    }
];




const ClothesOptions = () => {
  return (
  
     <FlatList
     data ={data}
     keyExtractor={(item)=> item.id}
     renderItem={({item}) => (
        <TouchableOpacity>
            <View>



            </View>
         
        </TouchableOpacity> 
        
        )}
     
     />  
   

  );
};

export default ClothesOptions;

