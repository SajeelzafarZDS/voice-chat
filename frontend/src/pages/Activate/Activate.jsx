import React, { useEffect, useState } from 'react';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const steps = {
    1: StepName,
    2: StepAvatar,
};

const Activate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    const { isAuth } = useSelector((state) => state.auth);
    const history = useHistory()

    useEffect(()=>{
     if(isAuth){
        history.push('/rooms')
     }
    },[])


    function onNext() {
        setStep(step + 1);
    }
    return (
        <div className="cardWrapper">
            <Step onNext={onNext}></Step>
        </div>
    );
};

export default Activate;
