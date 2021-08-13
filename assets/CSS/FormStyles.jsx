import {StyleSheet, Dimensions} from 'react-native'
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:ScreenWidth,
        height:ScreenHeight,
        backgroundColor:"#ffffff",
        padding:16
    },
    formView:{
        marginTop:20
    },
    Input:{
        height:50,
        borderRadius:25,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:"#E1E1E1",
        width:ScreenWidth - 32,
        paddingLeft:20,
        marginBottom:20
    }

});

export default styles;