import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import RenderFieldStep1 from "./firstStep"
import RenderFieldStep2 from "./secondStep"
import RenderFieldStep3 from "./thirdStep"


const StepsTv = ({activeStep,navigation}) =>  {
  return (
    <View style={{flex: 1, margin : 0}}>
    <ProgressSteps
    progressBarColor = "rgb(219,219,219)"
    completedProgressBarColor="rgb(44,209,158)"
    activeStepIconColor = "rgb( 235,6,42)"
    completedStepIconColor = "rgb(44,209,158)"
    activeStepIconBorderColor	= "rgb( 235,6,42)"
    disabledStepIconColor =  "rgb(219,219,219)"
    activeLabelColor = "rgb( 235,6,42)"
    completedLabelColor =  "rgb(44,209,158)"
    activeStepNumColor = "#ffff"
    completedStepNumColor = "#ffff"
    disabledStepNumColor=  "rgb(178 ,178 ,178 )"
    labelFontSize= {10}
    activeStep ={activeStep}
    >
        <ProgressStep label="Suscriptor" nextBtnStyle={{display : "none"}} previousBtnStyle={{display : "none"}}>
            <View style={{ alignItems: 'center' }}>
               <RenderFieldStep1/>
            </View>
        </ProgressStep>
        <ProgressStep label="Be Movil" nextBtnStyle={{display : "none"}} previousBtnStyle={{display : "none"}} >
            <View style={{ alignItems: 'center' }}>
               <RenderFieldStep2/>
            </View>
        </ProgressStep>
        <ProgressStep label="Kit"  nextBtnStyle={{display : "none"}} previousBtnStyle={{display : "none"}}>
            <RenderFieldStep3 navigation={navigation}/>
        </ProgressStep>
    </ProgressSteps>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


const mapStateToProps = ({TvReducer}) => ({
    activeStep : TvReducer.wizard?.activeStep
    
      
  })
  
  
export default connect(mapStateToProps,null)(StepsTv);
