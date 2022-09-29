import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';
import GlobalStyle from '../constants/GlobalStyle';

export default function Page1({navigation}) {

    const navigateToPage2 = ()=>{
      let data = {
        x: "Box1",
        y: "y-value"
      }
      navigation.push("Page2", data);
    }

    return (
        <View style={[styles.container, GlobalStyle.customContainer]}>
          <Text>Page1</Text>
          <Pressable onPress={navigateToPage2} style={ ({pressed}) => ({backgroundColor: pressed? "pink": "blue",})}>
            <Text style={{color: "white", padding: 10,}}>Page2</Text>
          </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    }
});