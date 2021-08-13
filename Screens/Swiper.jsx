import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity  } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import firstimage from '../assets/images/firstimage.png';
import Secondimage from '../assets/images/Secondimage.png';
import Thirdimage from '../assets/images/Thirdimage.png';
import {priColor} from '../Components/Colors';




const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? priColor: 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  
  return (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius:5,        
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};


function Swiper({navigation}){
  return (
    <Onboarding
    onSkip={()=>navigation.navigate('Login')}
    onDone={()=>navigation.navigate('CartDisplayPage')}

  
    DotComponent={Square}
     pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={firstimage} />,
        title: 'Real Taste',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
     

      {
        backgroundColor: '#fff',
        image: <Image source={Secondimage} />,
        title: 'Variaties',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
     

      {
        backgroundColor: '#fff',
        image: <Image source={Thirdimage} />,
        title: 'Great feeling',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
     
    ]}
  />
  
  );
}


const styles = StyleSheet.create({
  title:{
      fontSize:20,
      // fontFamily: "Cochin"
  }
});


export default Swiper; 

