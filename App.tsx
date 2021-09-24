import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Location from './GetLocation';
import GetCamera from './GetCamera';

const App = () => {  
  return (
    <NavigationContainer>
      {/* <GetCamera /> */}
      <Location />
    </NavigationContainer>
  );
};

export default App;
