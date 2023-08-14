import React, { useState } from 'react';

const HealthCareForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    error: '',
    ErrorCode: '',
    ErrorCodeandDescription: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormData({ ...formData });

    
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <h5>Help Desk Form </h5>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <input type="time" name="time" onChange={handleChange} />
        <input type="text" name="ErrorCode" placeholder="ErrorCode" onChange={handleChange} />
        <textarea name="ErrorCodeandDescription" placeholder="Error Code and Description" onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default HealthCareForm;
