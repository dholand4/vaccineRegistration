import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';

import StatusBar from './components/StatusBar';
import { UserProvider } from './providers/user';
import Routes from './routes';
import light from './themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <PaperProvider>
        <NavigationContainer>
          <UserProvider>
            <StatusBar />
            <Routes />
          </UserProvider>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}

export default App;
