
import React from 'react';
import { VerticalStepProgressBar } from './VerticalStepProgressBar';
import { HorizondalStepProgressBar } from './HorizondalStepProgressBar';
import { StepProgressBarProps } from './types';

const StepProgressBar = (props:StepProgressBarProps)=>{
    const orientation = props.orientation
    return (
        orientation === "horizondal" ? <HorizondalStepProgressBar {...props}/> : <VerticalStepProgressBar {...props}/>
    )
}

export { StepProgressBar }