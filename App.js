import { View, Text } from 'react-native'
import React from 'react'
import LoanScreen from './src/screens/LoanScreen/LoanScreen'
import { lightTheme } from './src/Theme/lightTheme'
import { Provider as PaperProvider } from "react-native-paper";
import Toast from 'react-native-toast-message';
import { moderateScale } from 'react-native-size-matters';


export default function App() {
  return (
    <PaperProvider theme={lightTheme}>
      <LoanScreen />
      <Toast 
        topOffset={moderateScale(60)}/>
    </PaperProvider>
  )
}