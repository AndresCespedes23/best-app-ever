import React, { useState } from 'react';

export default function LoginForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { fullName, email, profilePic };

    try {
      // Make a POST request to the API route
      const response = await fetch('/api/saveUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User data saved successfully');
        // Perform any additional actions or navigate to a new page
      } else {
        console.error('Error saving user data:', response.statusText);
        // Handle the error appropriately
      }
    } catch (error) {
      console.error('Error saving user data:', error);
      // Handle the error appropriately
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Profile Picture URL"
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
      />
      <button type="submit">Save User</button>
    </form>
  );
}
