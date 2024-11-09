import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileOutput() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/get_profile')
      .then((response) => setProfile(response.data))
      .catch((error) => console.error('Error fetching profile:', error));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <h2 style={styles.header}>User Profile</h2>
        <div style={styles.profileInfo}>
          <p style={styles.infoText}><strong>Name:</strong> {profile.name}</p>
          <p style={styles.infoText}><strong>Email:</strong> {profile.email}</p>
          <p style={styles.infoText}><strong>Date of Birth:</strong> {profile.dob}</p>
          <p style={styles.infoText}><strong>Contact:</strong> {profile.countryCode} {profile.contact}</p>
        </div>
      </div>
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
  },
  profileCard: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
    maxWidth: '100%',
    textAlign: 'center',
  },
  header: {
    color: '#333',    
    fontSize: '25px',
    marginBottom: '20px',
  },
  profileInfo: {
    textAlign: 'left',
  },
  infoText: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
};

export default ProfileOutput;
