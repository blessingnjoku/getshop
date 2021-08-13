import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,VirtualizedList, StatusBar,TextInput,ScrollView,TouchableHighlight,Image, Component, AppRegistry, Dimensions } from 'react-native';
import FormStyles from '../../assets/CSS/FormStyles';
import generalstyles from '../../assets/CSS/generalstyle'

import styles from '../../assets/CSS/FormStyles';
import { ShoppingCart } from 'react-native-feather';




let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

function CartDisplayPage({navigation}){
    
    return(
    
        <ScrollView  vertical={true} showsVerticalScrollIndicator={false}>
       <View>
      
         <View style={generalstyles.CartDisplayContainer}>
          <View style={generalstyles.Xcart}>
           <TouchableOpacity ><Text style={{paddingLeft:20}}>X</Text></TouchableOpacity>
           <Text style={{marginLeft:120, fontSize:16,}}>Cart</Text>
           </View>
           <View style={generalstyles.cartincart}>
               <Text style={generalstyles.cartnumber}>02</Text>
          <ShoppingCart color="#C4C4C4" width={100} height={90} />
          
          <Text style={{fontSize:16}}>Items in your cart</Text>
         </View>
         <Text style={generalstyles.buyinText}>Your are buying</Text>

         <View>
             <View style={generalstyles.circleIncart}></View>
             <View>
             <Text>Category Name</Text>
             <Text>Name of Products</Text>
             <Text>Remove</Text>
             </View>

             <View>
             <Text style={generalstyles.cart70}>{'\u20A6'}7000 </Text>
             <Text style={generalstyles.cart50}>{'\u20A6'}5000</Text>
             <View style={generalstyles.incrementcontainer}>
            <TouchableOpacity style={generalstyles.incrementMinus}><Text>-</Text></TouchableOpacity>
            <Text>1</Text>
             <TouchableOpacity style={generalstyles.incrementPlus}><Text>+</Text></TouchableOpacity> 
             </View>
             </View>
             <View></View>
             <View></View>

         </View>

         </View>

       </View>
       </ScrollView>

    )
}

export default CartDisplayPage;