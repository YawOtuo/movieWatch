import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Vp from './components/Vp';
import Navbar_ from './components/navbar';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const App = () => {
  
 

  return (

    <NavigationContainer>
        <MainNavigation/>
    </NavigationContainer>
   

  );
}

export default App;