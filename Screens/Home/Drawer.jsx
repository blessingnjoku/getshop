import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import FormStyles from '../../assets/CSS/FormStyles';
import generalstyles from '../../assets/CSS/generalstyle'

import { AuthContext } from '../../Components/content';


const { signOut } = React.useContext(AuthContext);
function Drawer(){
    return(
    <View><TouchableOpacity style={generalstyles.priBtn} onPress={() => {signOut()}} >
    <Text style={generalstyles.priBtnText}> Logout</Text>
   
    
</TouchableOpacity>
</View>

    )
}

export default Drawer;