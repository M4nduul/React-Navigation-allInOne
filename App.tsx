import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import SelectElement from './SelectElement'

const App = () => {
  
  return (
   <NavigationContainer>
     <SelectElement />
   </NavigationContainer>
  );
};

export default App;