import React, { useState, useEffect } from 'react';
import Step1PersonalInfo from './Step1PersonalInfo';
import Step2AddressInfo from './Step2AddressInfo';
import Step3Confirmation from './Step3Confirmation';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const steps = [
    <Step1PersonalInfo
      formData={formData}
      setFormData={setFormData}
      nextStep={nextStep}
    />,
    <Step2AddressInfo
      formData={formData}
      setFormData={setFormData}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <Step3Confirmation
      formData={formData}
      prevStep={prevStep}
    />,
  ];

  return (
    <div>
      {steps[step]}
    </div>
  );
};

export default MultiStepForm;
