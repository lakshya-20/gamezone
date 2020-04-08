import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Card from '../shared/card';
import {globalStyles, images} from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';


export default function reviewDetails({navigation}) {
    
  
  console.log(navigation);
  const item=(navigation.state.params.item);
  const rating = item.rating;
  const key=item.key;
  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={styles.topWrapper}>
          <View style={styles.contentWrapper}>
            <Text style={globalStyles.titleText}>
              { item.title }
            </Text>
            <Text>{ item.body }</Text>
          </View>
            <MaterialIcons name="delete"  size={24} style={styles.deleteToggle} onPress={() => navigation.state.params.del(key)}/>
        </View>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  topWrapper:{
    flexDirection:"row",
  },
  contentWrapper:{
    width:"90%",
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  deleteToggle:{
    alignItems:"flex-end",
  }
});