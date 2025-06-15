import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: user@test.com</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
}

export default Profile;
