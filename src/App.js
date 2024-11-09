import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import ProfileOutput from './ProfileOutput';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProfileForm />} />
          <Route path="/output" element={<ProfileOutput />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
