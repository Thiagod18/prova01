import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './componentes/AppNavigator'; 
import LoginScreen from './componentes/LoginScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppNavigator setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <LoginScreen setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}
