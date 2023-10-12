import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import Account from './src/Screen/Account';
import Splash from './src/Screen/Splash'
import Login from './src/Screen/Login'
import Welcome from './src/Screen/Welcome';
import Main from './src/Screen/Main';

function App() {
  return (
    <PaperProvider>
      <Main/>
    </PaperProvider>
  )
}

export default App
