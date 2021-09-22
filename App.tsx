import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SelectElement from './SelectElement'
import LottieView from 'lottie-react-native'

const App = () => {
  
  return (
      <NavigationContainer>
        <SelectElement />
      </NavigationContainer>
      // <LottieView source={require('./animation/69998-melting-lolly.json')} autoPlay loop={false} />
  );
};

export default App;
