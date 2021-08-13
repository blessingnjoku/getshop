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

function SearchDisplay(){
    
    return(
          
<View style={{flex: 1}}>

          
   <View style={generalstyles.searchContainer}>
      <Image style={generalstyles.logoimage} source={require('../../assets/images/winelogoicon.png')} />
        
        <View style={generalstyles.searchdiv}>
           <Text style={generalstyles.searchText}>Sample Search</Text>
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
    <ScrollView vertical={true} >
<View style={generalstyles.middleverticalscroll}>

 
    <View style={generalstyles.verticalDivContainer}>

        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />

             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>

        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>
        

    </View>


    <View style={generalstyles.verticalDivContainer}>
        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>

        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>
        

    </View>

    <View style={generalstyles.verticalDivContainer}>
        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>

        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>
        

    </View>


    <View style={generalstyles.verticalDivContainer}>
        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>

        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>
        

    </View>

    <View style={generalstyles.verticalDivContainer}>
        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>

        <View style={generalstyles.productcontainer}>
         <View style={generalstyles.imagediv}></View>
           <View style={generalstyles.Textdiv}>
      <Image style={generalstyles.addcart} source={require('../../assets/images/addcart.png')} />
             <Text style={generalstyles.catogoryname}>Category name</Text>
             <Text style={generalstyles.productname}>Name of product</Text>
             <Text style={generalstyles.productAmount}>N5000 <Text style={generalstyles.UnlineAmount}>N7000</Text></Text>


           </View>
        </View>
        

    </View>

   

  
 </View>
 </ScrollView>



 <View style={generalstyles.footericonContainer}>

 <View style={generalstyles.footerHome}>
 <TouchableOpacity >
    <Home 
     name="Home"
     color="#515251"
     width={40}
    />
    <Text style={{color:"'gray'"}} style={generalstyles.iconText}>Home</Text>
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

export default SearchDisplay;