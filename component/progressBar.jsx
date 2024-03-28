import { View } from 'react-native';
import React, { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';


const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0f8000',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0f8000',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0f8000',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0f8000',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#0f8000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#0f8000',
};


const ProgressBar = ({screen}) => {

  return (
    <View style={{backgroundColor:'white', marginTop:10}}>
     <StepIndicator
         customStyles={customStyles}
         currentPosition={screen}
         stepCount={14}
    />
    </View>
  );
};


export default ProgressBar;