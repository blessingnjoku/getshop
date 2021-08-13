import {StyleSheet, Dimensions,StatusBar,VirtualizedList,} from 'react-native'
import {secColor, priColor} from '../../Components/Colors';
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        marginBottom:20
    },
    bodyText:{
        fontSize:14
    },
    forget:{
     marginLeft:100,
     marginTop:10,
    },
    LinkText:{
        color:secColor,
    },
    priBtn:{
        backgroundColor:priColor,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25
    },
    priBtnText:{
        color:'#fff'
    },

    // Homepage styling

    searchdiv:{
        width:283,
        height:40,
        borderRadius:30,
        backgroundColor:'white',
        borderColor:'#E5E5E5',
        justifyContent:'center',
        borderWidth:1,
        marginTop:50,
        paddingLeft:10,
    

    },
    searchContainer:{
      justifyContent:"center",
      alignItems:'center',
      flexDirection:'row'
    },

    logoimage:{
     marginTop:50,
    },
    searchIcon:{
      marginLeft:250,
      marginBottom:20,
      position:'absolute'
    
    },
    searchText:{
    //    marginTop:50
    },
    ShoppingCart:{
    marginTop:50,
      
    },

    firstscroldiv:{
       width:287,
       height:143,
       borderRadius:30,
       borderColor:'gray',
       backgroundColor:'red',
       margin:10,

    },

    rectanglegridcontainer:{
    
      flexDirection:'row',
  
    },

    categoiesdiv:{
     marginTop:20,
    },
    categoriesText:{
      paddingLeft:20,
    },
    seeallText:{
        color:"#F07541",
        // position:'absolute',
        // left:350,
    },
    circlegridcontainer:{
        flexDirection:'row',
        marginBottom:90,
        height:150,
        
    },
    circlescrollbar:{
        // marginBottom:50,
    },


    circlescroll:{
      width:63,
      height:63,
      borderRadius:50,
      borderColor:'#f5f5f5',
      backgroundColor:'blue',
      margin:6,

    },

    descriptionText:{
       paddingLeft:15,
      
    },
    iconText:{
     
    },

    imagediv:{
     width:163.05,
     height:136.58,
     backgroundColor:'gray',
     borderTopEndRadius:10,
     borderTopLeftRadius:10,
    },

    Textdiv:{

    },
    productcontainer:{
      width:163.05,
      height:226,
      backgroundColor:'white',
      marginLeft:30,
      marginTop:20,
      
    },
    addcart:{
      // width:50,
    
      position:'absolute',
      left:120,
      top:-12,
  
    },

    Textdiv:{
      padding:10,
    },
    catogoryname:{
       color:'#908A8A'
    },
    productname:{
      color:'black'
    },

    productAmount:{
      color:'#515251',
      paddingTop:10,
    
    },
    UnlineAmount:{
      textDecorationLine:'line-through',
      color:'red'
     
    },

    verticalDivContainer:{
        flexDirection:'row',
        
         

    },

    

    footericonContainer:{
      flexDirection:'row',
     justifyContent:'space-around',
     paddingTop:20,
     position: 'absolute',
      left: 0, 
      right: 0, 
      bottom: 0,
      backgroundColor:'white',
      height:100,
    
    },

    footerHome:{
       
    },
    middleverticalscroll:{
      flex: 1, 
      //  marginTop: StatusBar.currentHeight,
    },
  

    // Error page 

    errorcontainer:{
     justifyContent:"center",
     marginLeft:130,
     marginTop:180,
      alignContent:"center",


    },

    categorieResult:{
      marginLeft:20,
    },
    seeallFliter:{

    },
    filtercontainer:{
      position:'absolute',
      left:300,
      flexDirection:"row",
 
    },

    // CategoriesPage

    ALLcategorie:{
   marginLeft:20,
    },
    catogoriesname:{
     padding:10,
    //  paddingLeft:30
    fontSize:20,
    },
    productCategoriescontainer:{
     width:165,
     height:181.37,
     backgroundColor:'white',
     marginLeft:30,
     marginTop:20,
    },

    Categoriesimagediv:{
     width:165,
     height:85.76,
     backgroundColor:'gray',
     borderTopEndRadius:10,
     borderTopLeftRadius:10,
    },

    productnumber:{
      paddingLeft:10,
    },

    // CategorySub
    SubcartContainer:{
     height:100,
     backgroundColor:"#B8231B",
     flexDirection:"row",
     paddingTop:50,
    },

    subcartText:{
     paddingLeft:100,
     fontSize:20,
     color:"white",
    },

    Subcartcirclegridcontainer:{
      flexDirection:'row',
      marginBottom:30,
      // backgroundColor:'red',
      height:150,
      
    },
    subcategoriesdiv:{
     marginTop:20,
     marginBottom:15.
    },

    productnavContainer:{
      height:100,
      backgroundColor:"#B8231B",
      flexDirection:"row",
      paddingTop:50,
    },

    // prductsdetails

    poductsdetailsimage:{
     width:350,
     height:406,
     borderRadius:40,
     backgroundColor:"white",
     marginTop:20,
     marginLeft:40,
     zIndex:1,
     justifyContent:"center"
     

    },
    slidcircle:{
    width:30,
    height:30,
    borderColor:"gray",
    },

    eyesstyle:{
      position:'absolute',
      top:80,
      left:330,
      

    },
    
    productDText:{
      fontWeight:"bold",
      padding:20,
    },
    containerProduct:{
       
    },
    producttexts:{
      paddingLeft:20,
      paddingBottom:15,
      
    },
    productInput:{
      height:50,
      borderRadius:25,
      // borderWidth:2,
      // borderStyle:'solid',
      // borderColor:"#E1E1E1",
      width:ScreenWidth - 32,
      paddingLeft:20,
      marginLeft:20,
      paddingTop:15,
      marginTop:20,

      backgroundColor:"#ffff"

    },

    eyeStyle:{
      position:'absolute',
      top:150,
      left:330,
    },


    sizedropdown:{
      position:"absolute",
      left:325,
      bottom:-3,
    },
    // sizetext:{
    //   paddingLeft:20,
    //   paddingTop:15,
    // },
    incrementcontainer:{
     display:'flex',
      flexDirection:'row',
      left:100,
      bottom:10,
      justifyContent:'center',
     
    },
    incrementMinus:{
      width:25,
      backgroundColor:"#f5f5f5",
      alignItems:'center',
      borderTopLeftRadius:3,
      marginRight:10,
       
    },
    incrementPlus:{
      width:25,
      backgroundColor:"#f5f5f5",
      alignItems:'center',
      borderTopRightRadius:3,
      marginLeft:10,
       
    },
    cartBotton:{
      width:142,
      height:52,
      borderRadius:32,
      backgroundColor:'#B8231B',
      justifyContent:"center",
      paddingLeft:30,
      color:'#fff',
      marginLeft:170,
      marginTop:15,
      padding:10,
     

    },
    cartBottonContainer:{
      display:'flex',
      flexDirection:"row",
      backgroundColor:"#fff",
      height:82,
      marginTop:40,
    },
    cartAmount:{
      marginLeft:30,
      marginTop:20,
    },
    cart7000:{
      textDecorationLine:"line-through",
    },
    cart5000:{
      fontWeight:"bold",
    },
    addText:{
      color:'#ffff',
      fontWeight:'bold',
    },
   

    // AlertAddedCartPage

    addedtocartBox:{
      width:283,
      height:192,
      borderRadius:54,
      backgroundColor:'#ffff',
      // justifyContent:"center",
      padding:20,
    },
    paybutton:{
      width:243,
      height:43,
      borderRadius:30,
      backgroundColor:'#B8231B',
      justifyContent:"center",
      paddingLeft:60,
      marginBottom:10,
      
      

    },
    mainaddCartBox:{
      position:"absolute",
      justifyContent:"center",
      top:200,
      left:50,

    },

    checkicon:{
    marginLeft:110,
    marginBottom:15,
    },
    itemAddedText:{
      paddingLeft:15,
      fontSize:24,
      marginBottom:15,
    },
    paybuttonText:{
    fontSize:18, 
    fontWeight:"bold", 
    color:"#fff",
    },

    // CartDisplayPage

    CartDisplayContainer:{
      width:320,
      height:806,
      borderBottomLeftRadius:30,
     borderTopLeftRadius:30,
      backgroundColor:"#fff",
      position:"absolute",
      left:95,
    },
    Xcart:{
      display:'flex',
      flexDirection:"row",
      marginTop:30,
     
      
    },
    cartincart:{
      position:"relative",
      top:60,
      left:100,

    },

    cartnumber:{
      position:"absolute",
      top:30,
      left:50,
      color:"green"
    },
    buyinText:{
      fontSize:18,
      top:100,
      paddingLeft:20,

    },
    circleIncart:{
      width:89,
      height:89,
      borderRadius:50,
      borderColor:"#FAECEC",
      borderWidth:3,
     
    }
});
  


export default styles;