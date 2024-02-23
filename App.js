import { View, Text } from 'react-native'
import React from 'react'
import LoanScreen from './src/screens/LoanScreen/LoanScreen'
import { lightTheme } from './src/Theme/lightTheme'
import { Provider as PaperProvider } from "react-native-paper";
import Toast from 'react-native-toast-message';
import { moderateScale } from 'react-native-size-matters';
import ErrorBoundary from 'react-native-error-boundary'
import CustomFallback from './src/components/Molecules/CustomFallback/CustomFallback';


export default function App() {
  const errorHandler = (error, stackTrace) => {
    /* Log the error to an error reporting service */
    console.log("Error that occurred", error, stackTrace)
  }
  return (
    <ErrorBoundary 
      onError={errorHandler}
      FallbackComponent={CustomFallback}
      >
      <PaperProvider theme={lightTheme}>
        <LoanScreen />
        <Toast
          topOffset={moderateScale(60)} />
      </PaperProvider>
    </ErrorBoundary>
  )
}