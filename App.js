import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoeScreen from './screens/ShoeScreen';
import HatScreen from './screens/HatScreen';
import ShirtScreen from './screens/ShirtScreen';
import PantsScreen from './screens/PantsScreen';




export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options ={{
              headerShown:false,
            }}
            />
            <Stack.Screen
            name='ShoeScreen'
            component={ShoeScreen}
            options ={{
              headerShown:false,
            }}
            />
             <Stack.Screen
            name='HatScreen'
            component={HatScreen}
            options ={{
              headerShown:false,
            }}
            />
             <Stack.Screen
            name='ShirtScreen'
            component={ShirtScreen}
            options ={{
              headerShown:false,
            }}
            />
             <Stack.Screen
            name='PantsScreen'
            component={PantsScreen}
            options ={{
              headerShown:false,
            }}
            />
        </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
