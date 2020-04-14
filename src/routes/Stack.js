import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/Search';

const MainStack = createStackNavigator();

const Stack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Business Search' }}
      />
    </MainStack.Navigator>
  );
};

export default Stack;
