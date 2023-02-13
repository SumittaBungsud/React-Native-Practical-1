import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Home, Login, Map, Camera, Slider, Market, Splash, Email } from './src/screen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
    const componentDidMount = () => SplashScreen.hide();
    componentDidMount()
  }, [])
  
  return (
    <SafeAreaProvider>
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Map" component={Map} options={{ headerShown: false }}/>
          <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }}/>
          <Stack.Screen name="Slider" component={Slider} options={{ headerShown: false }}/>
          <Stack.Screen name="Market" component={Market} options={{ headerShown: false }}/>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
          <Stack.Screen name="Email" component={Email} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </SafeAreaProvider>
  );
}


