import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Firebase from '../config/firebase' 

export default function Loading({navigation}) {
    useEffect(()=> {
        Firebase.auth().onAuthStateChanged(user => {
        navigation.navigate(user ? 'Drawer' : 'Signup')
    })
    })
    return(
        <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})