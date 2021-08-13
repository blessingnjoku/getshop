import React, {useState} from 'react';
import { StyleSheet, Text, Alert,View, TouchableOpacity, TextInput, StatusBar,Linking,  } from 'react-native';
import FormStyles from '../../assets/CSS/FormStyles';
import generalstyles from '../../assets/CSS/generalstyle'
import Homepage from '../Home/Homepage';
import * as WebBrowser from 'expo-web-browser'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../Components/content';
import  Feather from 'react-native-feather';
import { Eye } from 'react-native-feather';
import { EyeOff } from 'react-native-feather';


export default function Login({navigation}) {

 const[username, setUsername]= useState('');
 const[password, setPassword]= useState('');
 const[showpassword, setShowpassword]= useState(true);


 

    const onSubmit=async()=>{
        // fake api
        // alert('my name is Blessing')
        let apiUsername='Blessing';
        let apiPassword = 'Njoku';
        if(apiUsername == username && apiPassword == password ){
         const user = {id:1, username: 'Blessing'}
         await AsyncStorage.setItem('user', JSON.stringify(user))
         navigation.navigate('Homepage')
        }else{
            alert('incorrect Detailshh')
        }
    }
 
   const forgortpasswordprompt= async()=>{
    //    alert('my name is Blessing');
       Alert.alert(
           "",
           "Click ok to be redirected to the password reset page",
           [
               {text:"Cancel", style:"cancel"},
               {text:"ok", onPress: async()=>await WebBrowser.openBrowserAsync('https://www.google.com/')}
           ]
       );
   }

    return (
        <View style={FormStyles.mainView}>
            <Text style={generalstyles.title}>Log in</Text>
            <Text style={generalstyles.bodyText}>
                Don’t have an account? 
                <TouchableOpacity style={{marginBottom:-3}} onPress={()=>navigation.navigate('Register')}>
                    <Text style={generalstyles.LinkText}> Register</Text>
                </TouchableOpacity>
            </Text>

            <View style={FormStyles.formView}>
                <TextInput
                    style={FormStyles.Input}
                    placeholder="Username"
                    value={username}
                    onChangeText={text=>setUsername(text)}
                   
                />
                <TextInput
                    style={FormStyles.Input}
                    placeholder="Password"
                   secureTextEntry= {showpassword}
                   value={password}
                   onChangeText={text=>setPassword(text)}

                   
                  
                />
                    <TouchableOpacity style={generalstyles.eyesstyle} onPress={()=>{setShowpassword(!showpassword)}}> 
                        {
                            showpassword ? <Eye color="#515251" size={10} width={40} /> : <EyeOff color="#515251" width={40} />
                        }
                        
                    </TouchableOpacity>
                    
                    
                


                <TouchableOpacity style={generalstyles.priBtn}  onPress={()=>onSubmit()} >
                    <Text style={generalstyles.priBtnText}> Login</Text>
                   
                </TouchableOpacity>

                <Text style={generalstyles.forget}>
                Forgot Password? 
                <TouchableOpacity style={{marginBottom:-3}} onPress={() => forgortpasswordprompt()}>
                    <Text style={generalstyles.LinkText}> Reset</Text>
                </TouchableOpacity>
            </Text>
            </View>
        </View>
    )
}
