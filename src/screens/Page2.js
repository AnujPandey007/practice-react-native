import React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Page2({navigation, route}) {

  const { x, y } = route.params;

  const navigateToPage2 = ()=>{
    navigation.pop();
  }

  const myList = [
    {data:"option1"},
    {data:"option2"},
    {data:"option3"},
    {data:"option4"},
    {data:"option5"},
    {data:"option6"},
    {data:"option7"},
    {data:"option8"},
    {data:"option9"},
    {data:"option10"},
  ]

  return (
    <View style={{flex: 1, backgroundColor: "white", alignItems: "flex-start", justifyContent: "flex-start"}}>
      
      <View style={styles.container}>
        <View style={styles.listTile}>

          <View style={styles.leftSide}>

            <Image source={{uri: "https://ghantee.com/wp-content/uploads/2018/07/beautiful-lord-krishna-wallpaper-for-mobile.jpg"}} style={styles.leading} />

            <View style={styles.afterLeading}>
              <Text style={styles.title}>Anuj Kumar Pandey</Text>
              <Text style={styles.subTitle}>Beginner</Text>
            </View>

          </View>

          <View style={styles.rightSide}>
            <Text style={styles.trailing}>Edit</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor:"#4287f5"}}/>

        <View style={styles.optionsList}>
          <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index)=> index.toString()}
            data={myList}
            renderItem = {({item})=> {
              return (<Text style={styles.optionItem}>{item.data}</Text>)
            }}
          />
        </View>
      </View>

      {/* <Pressable onPress={navigateToPage2} style={ ({pressed}) => ({backgroundColor: pressed? "pink": "blue", width: "20%", alignItems: "center", justifyContent: "center"})}>
        <Text style={{color: "white", padding: 10}}>Page1</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      height: "40%", 
      width: "100%", 
      backgroundColor: "#4287f5", 
      alignItems: "flex-start", 
      justifyContent: "flex-start", 
      padding: 20,
      borderBottomLeftRadius: 75
    },
    listTile: {
      flexDirection: "row",
      width: "100%",
      // backgroundColor: "pink",
      justifyContent: "space-between"
    },
    leftSide: {
      flexDirection: "row",
    },
    leading: {
      width: 60, 
      height: 60,
      marginRight: 10,
      borderRadius: 10,
      // overflow: "hidden",
    },
    title: {
      fontWeight: "bold"
    },
    optionsList:{
      width: "100%",
      height: "100%",
      paddingLeft: 20,
      borderTopRightRadius: 75, 
      backgroundColor: "red",
    },
    optionItem: {
      padding: 20,
      fontSize: 18
    },
    footer:{
      flex: 1,
      width:"100%"
    },
});