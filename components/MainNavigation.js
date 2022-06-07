import React, {useState, useEffect} from 'react';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Navbar_ from './navbar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';


const Stack = createNativeStackNavigator()

class MainNavigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Stack.Navigator headerMode={'screen'}>
            <Stack.Screen name="Home" component={Home} options={{
              headerShown: true,
              headerTransparent: true,
              title: 'Home',
              headerTransparent: true,
              headerShadowVisible: false,
              headerStyle: {
                position: 'absolute',
                backgroundColor: 'transparent',
                zIndex: 100,
                top: 0,
                left: 0,
                right: 0,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                color:'white'
            },
              header:({navigation}) => <Navbar_ navigation={navigation} main={true}  />
    
        
            }}/>
            <Stack.Screen name="Detail" component={Detail} options={{
              headerTransparent: true,
              header:({navigation}) => <Navbar_ navigation={navigation} main={false}/>
              
            }}/>
            <Stack.Screen name="Search" component={Search} options={{
              headerTransparent: true,
              title:'Search',
              headerStyle: {
                position: 'absolute',
                backgroundColor: 'black',
                
            },
              header:({navigation}) => <Navbar_ navigation={navigation} main={false}  />
    
        
            }}/>
    
          </Stack.Navigator>
        );
    }
}

export default MainNavigation;