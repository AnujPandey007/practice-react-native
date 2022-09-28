import * as React from 'react';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalStyle from './constants/GlobalStyle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={GlobalStyle.customAppBarStyle} /*{{header: ()=> null}}*/>
        <Stack.Screen name="Page1" component={Page1} options={{title: "Page1"}}/>
        <Stack.Screen name="Page2" component={Page2} options={{title: "Page2"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
