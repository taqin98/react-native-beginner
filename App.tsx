/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootManager from './src/util/RootManager';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootManager />
      <FlashMessage floating={true} style={{ zIndex: 999 }} />
    </SafeAreaProvider>
  );
}


export default App;
