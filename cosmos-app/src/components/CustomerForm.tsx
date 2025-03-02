import React, { useState } from 'react';
import { createCustomerService, CustomerData } from './../services/customerService';


export default function CustomerForm() {
    
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createCustomerService(customer as CustomerData);
      console.log('Customer created:', response.data);
      setCustomer({
        name: '',
        email: '',
        address: '',
      });
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <>
    <p>Create Customer</p>
    <form onSubmit={handleCustomerSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={customer.address}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Customer</button>
    </form>
    </>
  );
};

