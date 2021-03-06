import React from 'react';
import {StyleSheet,View,Text,Image,FlatList} from 'react-native';

  

export default function sResults({navigation}) {
    return(
    <View style={styles.container}>
      <Text style={styles.Title}> Welcome to Results </Text>
        <Text style = {styles.SubText}>
        For All of Our Lazy Cooks ~
        </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title:{
    fontSize: 35,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderColor: '#b4d12e',
    borderWidth: 8,
    borderRadius: 20,
    backgroundColor: '#bfde31',
  },
  SubText:{
    fontSize: 20,
    color: '#e5e059',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
