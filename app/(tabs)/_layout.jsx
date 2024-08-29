import { View, Text } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Colors' // add colors from constants
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    // {headerShown:false} is to hide tob level}
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY
      }}> 
      <Tabs.Screen name='home'
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color})=><Ionicons name="home" size={24} color={color} /> 
      }} 
      />{/* set tab icon and color */}
      <Tabs.Screen name='explore'
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({color})=><Ionicons name="search" size={24} color={color} />
      }}
      />
      <Tabs.Screen name='profile'
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color})=><Ionicons name="people-circle" size={24} color={color} />
      }}
      />
    </Tabs>
  )
}