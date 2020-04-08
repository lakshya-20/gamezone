import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,TouchableWithoutFeedback, Keyboard} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';



export default function LoginScreen({navigation}){
    
    const login=()=>{
        navigation.navigate('Drawer');
        console.log("Hello")
    }

    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Drawer')}>
        <View>
            <Text style={styles.loginButton}>Login Screen hbjhgjh</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    loginButton:{
        marginTop:200,
        justifyContent:'center',
        alignItems:'center'
    }

})