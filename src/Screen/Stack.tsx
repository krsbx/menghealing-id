import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackType } from '../utils/interface';
import Detail from './Detail';
import Home from './Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { APPS_NAME, COLOR_PALETTE } from '../utils/constant';

const Stack = createNativeStackNavigator<ScreenStackType>();

const ScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: COLOR_PALETTE.FOCUS,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: APPS_NAME,
          headerLeft: () => <FontAwesome name="bars" size={24} color="white" />,
          headerRight: () => <FontAwesome name="user-alt" size={24} color="white" />,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: APPS_NAME,
          headerRight: () => <FontAwesome name="user-alt" size={24} color="white" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreenStack;
