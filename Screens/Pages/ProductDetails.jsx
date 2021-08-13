import React from 'react';
import { StyleSheet, Text, View,Animated,TouchableOpacity,VirtualizedList, StatusBar,TextInput,ScrollView,TouchableHighlight,Image, AppRegistry, Dimensions } from 'react-native';
import FormStyles from '../../assets/CSS/FormStyles';
import generalstyles from '../../assets/CSS/generalstyle'
import { VectorEffectProps } from 'react-native-svg';
import Svg from 'react-native-svg';
import styles from '../../assets/CSS/FormStyles';
import { SliderBox }from "react-native-image-slider-box";
// import ModalDropdown from 'react-native-modal-dropdown';
// import { Dropdown } from 'react-native-material-dropdown'


import { Navigation, Wifi } from 'react-native-feather';
import { Battery } from 'react-native-feather';
import { Search } from 'react-native-feather';
import { ShoppingCart } from 'react-native-feather';
import { Home } from 'react-native-feather';
import { List } from 'react-native-feather';
import { Package } from 'react-native-feather';
import { User } from 'react-native-feather'; 
import { Filter } from 'react-native-feather';
import {Grid} from 'react-native-feather';
import { render } from 'react-dom';
import { right } from '@popperjs/core';
import {ArrowLeft} from 'react-native-feather'
import {ChevronLeft} from 'react-native-feather'
import {ChevronDown} from 'react-native-feather'





let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;


class ProductsDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('../../assets/images/vodka1.png'),          // Local image
            require('../../assets/images/vodka2.png'), 
            require('../../assets/images/vodka4.png'),
            // require('../../assets/images/fruitS.png'),
            // require('../../assets/images/fruitss.png'),     


          ],
          textLenth: null,
          numberOfLines: 3,
         
      
        };
      };

      handleSeeMore = () => {
        this.state.textLenth
        ? this.setState({numberOfLines: 0})
        : this.setState({numberOfLines: 3, data:"seeless"});
    };

    
      
    render(){
      
      return(
        
       
        <View style={{flex: 1}}>
     

        <View style={generalstyles.productnavContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('')}>
            <Text style={{ color:"white",flex:1, }}> <ChevronLeft color="#ffff" width={50} height={30}/></Text>
            </TouchableOpacity>
            <Text style={generalstyles.subcartText}> Details</Text>
        </View>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}> 
        <View style={generalstyles.poductsdetailsimage}>
            
        
      <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)}
            dotColor="red"
            inactiveDotColor="#ffff"
          
            // sliderBoxHeight={200}
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
                position: "absolute",
                bottom: 0,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10,
                marginRight:10,
                borderRadius: 30,
                
              
            
              }}
              paginationBoxVerticalPadding={50}
           
              dotStyle={{
                padding: 0,
                margin: 0,
                marginHorizontal: 0,
                width: 30,
                height: 30,
                position:'absolute',
                right:65,
                borderRadius: 50,
                backgroundColor: "red",
                borderWidth:1,
                borderStyle:'solid',
                borderColor:"#E1E1E1",
           
              }} 
           
              ImageComponentStyle={{borderRadius: 46, width: '84%', height:'95%', marginRight:60, justifyContent: "center",}}
              imageLoadingColor="gray"
              
            />
            
             <View style={generalstyles.incrementcontainer}>
            <TouchableOpacity style={generalstyles.incrementMinus}><Text>-</Text></TouchableOpacity>
            <Text>1</Text>
             <TouchableOpacity style={generalstyles.incrementPlus}><Text>+</Text></TouchableOpacity> 
             </View>
             
         </View>
         <View style={generalstyles.containerProduct}>
           <View>
          <Text style={generalstyles.productDText}>Full Products Details comes here</Text>           
           
          <Text style={generalstyles.producttexts}  numberOfLines={this.state.numberOfLines}
          onPress={() => this.handleSeeMore()}
           ellipsizeMode="middle"
          onTextLayout={({nativeEvent: {lines}}) =>
           this.setState({textLenth: lines.length === 3})
           }>
          Vodka is a European clear distilled alcoholic beverage. 
          Different varieties originated in Poland, Russia and Sweden.
           Vodka is composed mainly of water and ethanol,
           but sometimes with traces of impurities and flavourings.

            {'    '}
            {this.state.textLenth && (
          
            <TouchableOpacity>
         <Text style={{color:'#F07541', paddingLeft:20,}} 
           onPress={() => this.setState({numberOfLines: 0 })}>See more</Text>
        
         </TouchableOpacity>
          )}
          </Text> 
         </View>

            <View style={generalstyles.productInput}> 
         
            <Text style={generalstyles.sizetext}>Size</Text> 
            <TouchableOpacity > 
            
            <ChevronDown color="#000" style={generalstyles.sizedropdown} />
           {/* <Dropdown label="size" onPress={this.state.dropdownlist} /> */}
          
            </TouchableOpacity> 
            
        </View>
        <View style={generalstyles.cartBottonContainer}>
          <View style={generalstyles.cartAmount}>
          <Text style={generalstyles.cart7000}>{'\u20A6'}7000</Text>
          <Text style={generalstyles.cart5000}>{'\u20A6'}5000</Text>
          </View>
          <TouchableOpacity style={generalstyles.cartBotton} ><Text style={generalstyles.addText}>Add to Cart</Text></TouchableOpacity>

        </View>

         </View>
         </ScrollView>
         
        
        </View>

 






    );
  };
}

export default ProductsDetails;