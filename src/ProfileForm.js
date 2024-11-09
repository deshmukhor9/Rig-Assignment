import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, dob, countryCode, contact };
    try {
      await axios.post('http://localhost:8000/save_profile', userData);
      navigate('/output');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.header}>User Profile Form</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Contact Number:</label>
          <div style={styles.contactGroup}>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
              style={styles.select}
            >
              <option value="">Country Code</option>
              <option value="+1">+1 (USA)</option>
              <option value="+91">+91 (India)</option>
              <option value="+44">+44 (UK)</option>
            </select>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              placeholder="Enter contact number"
              style={styles.input}
            />
          </div>
        </div>

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc',
    fontFamily: 'Arial, sans-serif',
    animation: 'scaleUp 0.5s ease-in-out',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
    maxWidth: '100%',
    animation: 'fadeInUp 0.7s ease-out',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  inputGroup: {
    marginBottom: '15px',
    position: 'relative',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  },
  inputHover: {
    boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
    transform: 'scale(1.02)',
  },
  contactGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  select: {
    width: '48%',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    outline: 'none',
    transition: 'box-shadow 0.3s ease',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out, background-color 0.3s ease',
  },

};

export default ProfileForm;
