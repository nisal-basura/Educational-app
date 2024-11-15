import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

export default function Login() {
      WebBrowser.maybeCompleteAuthSession();
      const [request, response, promptAsync] = Google.useAuthRequest({ 
        androidClientId: '321464972895-4gahktrf0o260305o4fvvbm9mlu2i35l.apps.googleusercontent.com', 
        expoClientId:'321464972895-j7of67fc0uo3i0spsdn53ri2707ii75c.apps.googleusercontent.com'
        
      });
  return (
    <View>
      <Image source={require('./../assets/image/login.png')}/>
      <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to App</Text>
      <Text style={{textAlign:'center',
        marginTop:80,fontSize:20
      }}>Login/Sign up</Text>
      <TouchableOpacity style={styles.button} 
       onPress={()=>promptAsync()}>
      <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}} />
        <Text style={{color:Colors.white}}>Sign In with google</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      paddingTop:40,
      marginTop:-20,
      backgroundColor:'#fff',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,

  },
  welcomeText:{
       fontSize:35,
       textAlign:"center",
       fontWeight:"bold",
       
  },
  button:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
  }

  
})