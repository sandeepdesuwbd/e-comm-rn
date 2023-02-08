/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dashboard} from './src/screens/dashboard';
import {ProductDetails} from './src/screens/productDetails';
import Header from './src/components/header';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Dashboard}
            options={{headerTitle: () => <Header />}}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{headerTitle: () => <Header />}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
