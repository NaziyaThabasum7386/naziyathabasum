import React from 'react';
import { TextField, Button } from '@mui/material';

const Step1PersonalInfo = ({ formData, setFormData, nextStep }) => {
  const { name, email, phone } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    if (!name || !email || !phone) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <TextField
        name="name"
        label="Name"
        value={name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        value={email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="phone"
        label="Phone"
        value={phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
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

export default Step1PersonalInfo;
