"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import '../auth.css';
import { ToastContainer, toast } from 'react-toastify';
import back from '../signup/back.jpg'

const SignupPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/admin/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Admin registration successful', data);

        toast.success('Admin Registration Successful', {
          position: 'top-center', // Use string directly
        });
      } else {
        console.error('Admin registration failed', response.statusText);
        toast.error('Admin Registration Failed', {
          position: 'top-center', // Use string directly
        });
      }
    } catch (error) {
      toast.error('An error occurred during registration');
      console.error('An error occurred during registration', error);
    }
  };

  return (
    <div className="background-container">
      <Image 
        src={back} // Adjust the path based on your public directory structure
        alt="Background"
        layout="fill" // Fills the parent container
        objectFit="cover" // Covers the background space
        quality={100} // Optional: adjusts image quality
      />
    <div className='formpage'>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign up</button>
      <ToastContainer /> {/* Include the ToastContainer */}
    </div>
    </div>
  );
};

export default SignupPage;
