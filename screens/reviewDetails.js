import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function reviewDetails({navigation}) {
    const pressHandler=()=>{
        navigation.goBack();
    }
    return (
    <View style={styles.container}>
        <Text>ReviewDetails Screen</Text>
        <Button title="Way to home" onPress={pressHandler}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});