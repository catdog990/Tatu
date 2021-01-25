import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';



const settings = function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.pics}
          source={require('../assets/dedsec2.png')}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'black',
    },
    pics: {
        height: 500,
        width: 300,

    }
  });
  

  export default settings;