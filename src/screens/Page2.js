import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function Page2({navigation}) {

    const navigateToPage2 = ()=>{
        navigation.pop();
    }

    return (
        <View style={styles.container}>
          <Text>Page2</Text>
          <Pressable onPress={navigateToPage2} style={ ({pressed}) => ({backgroundColor: pressed? "pink": "blue",})}>
            <Text style={{color: "white", padding: 10}}>Page1</Text>
          </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: "10%",
      backgroundColor: "pink",
      alignItems: "center",
      justifyContent: "center"
    }
});