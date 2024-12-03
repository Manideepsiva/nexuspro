import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const HospitalForm = () => {
  const [state, setState] = useState('');
  const [districts, setDistricts] = useState([]);

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);

    switch (selectedState) {
      case 'Andhra Pradesh':
        setDistricts(['Alluri Sitharama Raju', 'Anakapalli', 'Ananthapuramu', 'Annamayya', 'Bapatla', 'Chittoor', 'Dr. B.R. Ambedkar Konaseema', 'East Godavari', 'Eluru', 'Guntur', 'Kakinada', 'Krishna', 'Kurnool', 'Nandhyala', 'NTR', 'Palnadu', 'Parvathipuram Manyam', 'Prakasam', 'Sri Pottisriramulu Nellore', 'Sri Sathya Sai', 'Srikakulam', 'Tirupati', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa']);
        break;
      case 'Telangana':
        setDistricts(['Hyderabad', 'Bhadradri Kothagudem', 'Medchal Malkajgiri', 'Ranga Reddy']);
        break;
      case 'Karnataka':
        setDistricts(['Bengaluru Rural', 'Bengaluru Urban', 'Chitradurga', 'Tumakuru']);
        break;
      case 'Tamil Nadu':
        setDistricts(['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli']);
        break;
      default:
        setDistricts([]);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCydjMrC682-bne_-yyrYkTCdxl0sEISxHxQ&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          padding: '40px',
          width: '400px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#333' }}>Hospital Registration</h2>
        <Form method="post" encType="multipart/form-data">
          <div>
            <label htmlFor="hospitalName">Hospital Name:</label>
            <input type="text" name="hospitalName" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <select name="state" onChange={handleStateChange} required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}>
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </div>
          <div>
            <label htmlFor="district">District:</label>
            <select name="district" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}>
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="document1">Upload Business License Document:</label>
            <input type="file" name="document1" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label htmlFor="document2">Upload NABH Accreditation Document:</label>
            <input type="file" name="document2" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label htmlFor="document3">Upload ISO Certificate:</label>
            <input type="file" name="document3" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label htmlFor="document4">Upload Laboratory License Document:</label>
            <input type="file" name="document4" required style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default HospitalForm;
