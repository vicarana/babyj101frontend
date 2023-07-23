import React, { useState } from 'react';

const InventoryForm = ({ onSubmit }) => {
  const [size, setSize] = useState('');
  const [type, setType] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form data and handle form submission
    if (size.trim() === '' || type.trim() === '' || totalAmount.trim() === '') {
      // Handle form validation error
      return;
    }

    // Call the onSubmit function passed from the parent component with the form data
    onSubmit({ size, type, totalAmount });

    // Reset the form fields after submission
    setSize('');
    setType('');
    setTotalAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Size:
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
      </label>
      <label>
        Type:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <label>
        Total Amount of Cloth:
        <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InventoryForm;
