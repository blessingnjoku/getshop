import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Swiper from './Screens/Swiper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Form/Login';
import Homepage from './Screens/Home/Homepage';
import { useEffect } from 'react/cjs/react.production.min';
import { AuthContext } from './Components/content';
import Errorsearchpage from './Screens/Pages/Errorsearchpage';
import SearchDisplay from './Screens/Pages/SearchDisplay';
import CategoriesPage from './Screens/Pages/CategoriesPage';
import CategorySubCart from  './Screens/Pages/CategorySubCart'
import ProductDetails from './Screens/Pages/ProductDetails'
import Register from './Screens/Form/Register'
import  AlertAddedCartPage from './Screens/Pages/AlertAddedCartPage'
import CartDisplayPage from './Screens/Pages/CartDisplayPage'






const Stack = createStackNavigator();

export default function App() {

  // const [isLoading, setIsLoading]= React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  //   const authcontext = React.useMemo(()=>({
  //    signIn:()=>{
  //      setUserToken('CXCV');
  //      setIsLoading(false);
  //    },
  //    signOut:()=>{
  //     setUserToken(null);
  //     setIsLoading(false);
  //    },
  //    signUp:()=>{
  //     setUserToken('CXCV');
  //     setIsLoading(false);
  //    },
   


  //   }))


  //   useEffect(()=>{
  //    setTimeout(()=>{
  //      setIsLoading(false);
  //    },1000);

  //   },[]);

  // if(isLoading){
  //   return(
  //     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  //       <ActivityIndicator size='large'/>
  //     </View>
  //   )
  // }
  return (
  //  <AuthContext.Provider value={authcontext}> 
   <NavigationContainer>
   <Stack.Navigator>
  
     <Stack.Screen name="Onboarding" component={Swiper} options={{headerShown:false}} /> 
     <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> 
     <Stack.Screen name="Homepage" component={Homepage} options={{headerShown:false}} />
     <Stack.Screen name="Errorsearchpage" component={Errorsearchpage} options={{headerShown:false}} />
     <Stack.Screen name="SearchDisplay" component={SearchDisplay} options={{headerShown:false}} />
     <Stack.Screen name="CategorySubCart" component={CategorySubCart} options={{headerShown:false}} />
     <Stack.Screen name="CategoriesPage" component={CategoriesPage} options={{headerShown:false}} />
     <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}} />
    <Stack.Screen name="AlertAddedCartPage" component={AlertAddedCartPage} options={{headerShown:false}} />
    <Stack.Screen name="CartDisplayPage" component={CartDisplayPage} options={{headerShown:false}} />


    





   </Stack.Navigator>
 </NavigationContainer>
//  </AuthContext.Provider>
  );
}
