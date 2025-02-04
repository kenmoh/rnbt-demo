import { withLayoutContext } from 'expo-router';
import React from 'react';
import {
  createNativeBottomTabNavigator,
  NativeBottomTabNavigationOptions,
  NativeBottomTabNavigationEventMap,
} from '@bottom-tabs/react-navigation';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';



const BottomTabNavigator = createNativeBottomTabNavigator().Navigator

const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator);


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      // tabBarStyle={{
      //   backgroundColor: 'red'
      // }}
      labeled
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => require('@/assets/images/utensils.svg'),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Profile',
          tabBarIcon: () => require('@/assets/images/user-round.svg')
        }}
      />
    </Tabs>
  );
}
