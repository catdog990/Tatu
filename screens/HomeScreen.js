import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';



 const home = function HomeScreen() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.pics}
        source={require('../assets/dedsec1.png')}
      />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    pics: {
        height: 300,
        width: 300,

    }
  });
  

  export default home;