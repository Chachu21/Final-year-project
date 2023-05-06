import React, { useState } from "react";
import "./farmers.css";
import axios from "axios";

function FarmerUpdate() {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    birth_date: "",
    email: "",
    address: "",
    phone_number: "",
    land_amount: "",
    user_name: "",
    password: "",
    id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/farmers/update/:id",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setFormData({
      fname: "",
      mname: "",
      lname: "",
      birth_date: "",
      email: "",
      address: "",
      phone_number: "",
      land_amount: "",
      user_name: "",
      password: "",
      id: "",
    });
  };

  return (
    <div className="farmers">
      <div>
        <h2>Farmers registration form</h2>
      </div>
      <form className="farmer-registration-form" onSubmit={handleSubmit}>
        <div className="label_input">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="mname">Middle Name:</label>
          <input
            type="text"
            id="mname"
            name="mname"
            value={formData.mname}
            onChange={handleChange}
          />
        </div>
        <div className="label_input">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="birth_date">Birth Date:</label>
          <input
            type="date"
            id="birth_date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="address">Address :</label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="phone_number">Tel phone :</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="land_amount">Land NO :</label>
          <input
            type="number"
            id="land_amount"
            name="land_amount"
            value={formData.land_amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="user_name">Username:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="id">ID No:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FarmerUpdate;
