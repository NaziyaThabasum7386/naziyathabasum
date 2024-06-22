import React from 'react';
import { Button } from '@mui/material';

const Step3Confirmation = ({ formData, prevStep }) => {
  const handleSubmit = () => {
    // Submit form data to an API or process it as needed
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <Button
        variant="contained"
        color="secondary"
        onClick={prevStep}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Step3Confirmation;
