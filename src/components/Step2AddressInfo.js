import React from 'react';
import { TextField, Button } from '@mui/material';

const Step2AddressInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const { address1, address2, city, state, zip } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    return address1 && city && state && zip;
  };

  return (
    <div>
      <TextField
        name="address1"
        label="Address Line 1"
        value={address1}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="address2"
        label="Address Line 2"
        value={address2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="city"
        label="City"
        value={city}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="state"
        label="State"
        value={state}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="zip"
        label="Zip Code"
        value={zip}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
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
        onClick={nextStep}
        disabled={!validate()}
      >
        Next
      </Button>
    </div>
  );
};

export default Step2AddressInfo;
