import { View, Text } from 'react-native'
import React from 'react'
import LoanScreen from './src/screens/LoanScreen/LoanScreen'
import { lightTheme } from './src/Theme/lightTheme'
import { Provider as PaperProvider } from "react-native-paper";


export default function App() {
  return (
    <PaperProvider theme={lightTheme}>
      <LoanScreen />
    </PaperProvider>
  )
}