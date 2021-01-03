import React from 'react';
import DrawerNavigation from './src/navigation/drawerNavigation'
import { NavigationContainer } from "@react-navigation/native";

export default function App () {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
      
  );
}
