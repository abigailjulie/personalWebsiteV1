import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { Button, Form, InputGroup } from "react-bootstrap";
import { toast } from 'react-hot-toast';
import { loginUser } from '../api/LoginAPI.jsx';
import TextRotator from '../components/TextRotator.jsx';
import './Login.css';

export default function Login() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(password);
      if (result.success) {
        toast.success('Login successful!');
        if (result.loginCount % 5 === 0) {
          navigate('/contact');
        } else {
          navigate('/home');
        }
      } else {
        toast.error(result.message || 'Invalid password');
      }
    } catch (error) {
      toast.error('An error occurred while processing your request');
    }
  }

  useEffect(() => {
    // Clear any previous sessions or login states
    const handleInactivity = () => {
      setTimeout(() => {
        toast.info('Session expired due to inactivity');
        navigate('/');
      }, 1800000); // 30 minutes
    };

    handleInactivity();
  }, [navigate]);

  return (
    <div className='loginContainer'>
      <div className="login">
        <TextRotator toRotate={[`Glad you're here :)`]} period={200} />
        <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <InputGroup className='loginInput mb-3'>
              <Form.Control
                type="password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant='outline-secondary' id='enterBtn' type='submit'>
                Enter <RiLockPasswordLine className='icon' />
              </Button>
            </InputGroup>
          </div>
        </form>
      </div>
    </div>
  );
};
