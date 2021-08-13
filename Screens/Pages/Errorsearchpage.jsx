import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,VirtualizedList, StatusBar,TextInput,ScrollView,TouchableHighlight,Image, Component, AppRegistry, Dimensions } from 'react-native';
import FormStyles from '../../assets/CSS/FormStyles';
import generalstyles from '../../assets/CSS/generalstyle'
import { Feather } from 'react-native-feather';
import { VectorEffectProps } from 'react-native-svg';
import Svg from 'react-native-svg';
import styles from '../../assets/CSS/FormStyles';
// import maincart from '../../assets/images/maincart';

import { Wifi } from 'react-native-feather';
import { Battery } from 'react-native-feather';
import { Search } from 'react-native-feather';
import { ShoppingCart } from 'react-native-feather';
import { Home } from 'react-native-feather';
import { List } from 'react-native-feather';
import { Package } from 'react-native-feather';
import { User } from 'react-native-feather';
import { Filter } from 'react-native-feather';
import {Grid} from 'react-native-feather'



let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

function Errorsearchpage(){
    
    return(
          
<View style={{flex: 1}}>

          
   <View style={generalstyles.searchContainer}>
        
        <View style={generalstyles.searchdiv}>
           <Text style={generalstyles.searchText}>Search</Text>
           <Search 
          style={generalstyles.searchIcon}
          size={21}
          color="#C4C4C4"
          />

        </View>
        <Image 
        style={generalstyles.ShoppingCart}
        source={require('../../assets/images/maincart.png')} 

        />
           {/* <ShoppingCart
           style={generalstyles.ShoppingCart}
           color="#908A8A"
        /> */}
  </View>
 

    <View style={generalstyles.categoiesdiv}>
    <Image style={generalstyles.logoimage} source={require('../../assets/images/winelogoicon.png')} />

        <Text style={generalstyles.categorieResult}>0 Result</Text>
        <View style={generalstyles.filtercontainer}>
       <Text style={generalstyles.Fliter}>Filter</Text>
       < Filter
         color="gray"
          height={20}

        />
      <Grid
          color="gray"
           height={20}
      />
       </View>

    </View>
 
 <View style={generalstyles.errorcontainer}>
   <ShoppingCart
     color="gray"
     width={150}
     size={200}
     
   />
   
   <Text>Opps no product found</Text>
   
   </View>




 <View style={generalstyles.footericonContainer}>

 <View style={generalstyles.footerHome}>
 <TouchableOpacity >
    <Home 
     name="Home"
     color="red"
     width={40}
    />
    <Text style={{color:'red'}} style={generalstyles.iconText}>Home</Text>
    </TouchableOpacity>
 </View>
 <View>
 <TouchableOpacity >
 <List 
     name="categories"
    color="#515251"
    width={50}
 />
 <Text style={generalstyles.iconText}>Categories</Text>
 </TouchableOpacity>
 </View>
 
 <View>
 <TouchableOpacity >
 <Package 
  name="packages"
  color="#515251"
  width={40}
 />
 <Text style={generalstyles.iconText}>Order</Text>
 </TouchableOpacity>
 </View>

<View>
<TouchableOpacity >
  <User 
  name="user"
  color="#515251"
  width={40}

  />
<Text style={generalstyles.iconText}>Profile</Text>
 </TouchableOpacity>
</View>

 </View>



 </View>

 


    )
}

export default Errorsearchpage;