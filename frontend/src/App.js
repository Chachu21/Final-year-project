import React from 'react'
import './App.css'
import FarmersData from './components/displayFarmersData/farmers_data';
import { Route, Routes } from 'react-router-dom';
import DisplaySingleData from './components/displayFarmersData/displaySingleData';
import FarmerUpdate from './components/displayFarmersData/farmerUpdate';
import RegistrationFormate from './components/formate/registrationFormate';
// import OrderFOrm from './components/OrderForm/order';
// import FarmerRegistrationForm from './components/registrationForm/FarmersForm';
const App = () => {
  return (
    <div className="App">
      {/* <FarmerRegistrationForm /> */}
      <Routes>
        <Route path="/" element={<FarmersData />} />
        <Route path="/view/:id" element={<DisplaySingleData />} />
        <Route path="/update/:id" element={<FarmerUpdate />} />
      </Routes>

      {/* <OrderFOrm /> */}
      <RegistrationFormate typeName="Woreda" />
    </div>
  );
}

export default App