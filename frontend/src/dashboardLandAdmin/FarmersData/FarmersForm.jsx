import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function FarmerRegistrationForm() {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    birth_date: "",
    gender: " ",
    land_by_ha: " ",
    email: "",
    phone_number: "",
    user_name: "",
    password: "",
  });

  const [landAdmin, setLandAdmin] = useState([]);
  // const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const LandAdmin_id = user.rep_id;
  console.log(LandAdmin_id);
  useEffect(() => {
    const fetchedData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/kebele/${LandAdmin_id}`
      );
      setLandAdmin(response.data);
    };
    fetchedData();
  }, [LandAdmin_id]);

  const kebele_id = landAdmin.length > 0 ? landAdmin[0].kebele_id : "";
  console.log(kebele_id);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response =  await axios.post("http://localhost:5001/api/v1/farmers", {
        ...formData,
        kebele_id,
      });
      console.log(response.data)
      window.alert("Farmer successfully registered.");
      setFormData({
        fname: "",
        mname: "",
        lname: "",
        birth_date: "",
        gender: " ",
        land_by_ha: " ",
        email: "",
        phone_number: "",
        user_name: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-0 flex-col">
      <div>
        <h2 className="text-black font-extrabold leading-10 py-25">
          Farmers Registration Form
        </h2>
      </div>
      <form
        action="farmer-registration-form"
        className="flex flex-col bg-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="id">ID No:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="mname">Middle Name:</label>
            <input
              type="text"
              id="mname"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col w-350">
            <label htmlFor="birth_date">Birth Date:</label>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="outline-none w-[350px] h-10 pl-5 rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-15 px-15">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="land_by_ha">Land Amount:</label>
            <input
              type="number"
              id="land_by_ha"
              name="land_by_ha"
              value={formData.land_by_ha}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="phone_number">Telephone:</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="user_name">User Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className=" h-10 flex items-center justify-center my-6 w-[150px] bg-48px bg-green-400 rounded-2xl">
            <button className="text-center bg-green-400 " type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FarmerRegistrationForm;