import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddingZone() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
  });
const { id, name } = formData;
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
 const [admin, setAdmin] = useState([]);
  

  // fetch admin detail
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/admin/${user.rep_id}`
        );
        setAdmin(response.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAdmins();
  }, [user.rep_id]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(admin.region_id);
      await axios.post("http://localhost:5001/api/v1/addzone", {
        id,
        name,
        region_id: admin.region_id,
      });
      window.alert("Zone successfully registered.");
      navigate("/region_dashboard/register_zonerep");
    } catch (error) {
      console.log(error);
    }

    setFormData({
      name: "",
      id: "",
    });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-0 flex-col px-16">
      <h2 className="text-black font-extrabold leading-10 py-[25px]">
        Zone Registration Form
      </h2>
      <form className="flex flex-col bg-gray-200" onSubmit={handleSubmit}>
        <div className="justify-center items-center gap-10  py-[15px] px-[15px]">
          <div className="flex justify-left flex-col">
            <label htmlFor="name">Zone Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={name}
              required
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            />
          </div>
          <div className="flex justify-left flex-col">
            <label htmlFor="id">Id</label>
            <input
              type="number"
              name="id"
              id="id"
              onChange={handleChange}
              value={id}
              required
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="h-10 flex items-center justify-center my-6 w-[200px] bg-48px bg-green-400 rounded-2xl">
            <button className="text-center bg-green-400" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddingZone;