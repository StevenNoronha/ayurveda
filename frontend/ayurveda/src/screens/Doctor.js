import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Doctor() {
  const [doctorData, setDoctorData] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

  const loadData = async () => {
    let response = await fetch(global.url + "api/doctorData", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    setDoctorData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const uniqueAddresses = [...new Set(doctorData.map(doctor => doctor.address))];
    setAddresses(uniqueAddresses);
    console.log(uniqueAddresses);
  }, [doctorData, addresses]);

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <div>
    <Navbar/>
    <div className='container background flexUtil' style={{"gap": "2rem"}}>
    <div className='questions'><h1>Find the nearest doctor to you, by chosing your location</h1></div>
      <div className='login container flexUtil'>
        <select className="select-container" value={selectedAddress} onChange={handleAddressChange}>
          <option value="">Select an address</option>
          {addresses.map((address, index) => (
            <option key={index} value={address}>{address}</option>
          ))}
        </select>
        {selectedAddress && (
          <div>
            {doctorData.filter(doctor => doctor.address === selectedAddress).map((doctor, index) => (
              <div key={index}>
                <h3>{doctor.doctor_name}</h3>
                <p>Clinic Name: {doctor.clinic_name}</p>
                <p>Mobile: {doctor.mobile}</p>
                <p>Complete Address: {doctor.complete_address}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Doctor;