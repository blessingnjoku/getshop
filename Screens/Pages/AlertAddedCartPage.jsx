import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,VirtualizedList, StatusBar,TextInput,ScrollView,TouchableHighlight,Image, Component, AppRegistry, Dimensions } from 'react-native';
import FormStyles from '../../assets/CSS/FormStyles';
import generalstyles from '../../assets/CSS/generalstyle'
import { CheckCircle } from 'react-native-feather';

  function AlertAddedCartPage  ({navigation}){

  return(
   <View style={generalstyles.mainaddCartBox}>
       <View style={generalstyles.addedtocartBox} >
         <CheckCircle color="green" style={generalstyles.checkicon}/>  
        <Text style={generalstyles.itemAddedText}>Item Added to Cart</Text>
       <TouchableOpacity style={generalstyles.paybutton}><Text style={generalstyles.paybuttonText}>Proceed to pay</Text></TouchableOpacity>
       <TouchableOpacity>
       <Text style={{paddingLeft:50,color:"#F07541"}}>No, continue Shoppping</Text>
       </TouchableOpacity>
       </View>
   </View>
  )
}
export default AlertAddedCartPage;