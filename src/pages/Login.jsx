import { React, useState, useEffect } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { redirect } from "react-router-dom";
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Glad you're here :)" ];
  const period = 1000;


  const [ data, setData ] = useState({password: ''});

  //I'M NOT SURE HOW TO STOP THE TICKER. IT IS AN INFINITE LOOP BUT I'D LIKE IT TO RUN LIKE THREE TIMES ONLY.
  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }

    const loginUser = (e) => {
      e.preventDefault();
      axios.get('/')
    }

return (
      <>
        <div>
        <h1>{`Welcome! `}<span className='txt-rotate'><span className='wrap'>{text}</span></span></h1>
        </div>
        <div className='login'>
            <form onSubmit={loginUser}>
              <div className='input-box'>
                <InputGroup className='loginInput mb-3'>
                  <Form.Control
                    type="password"
                    placeholder='Password'
                    aria-label='Password'
                    aria-describedby='basic-addon2'
                    value={data.password}
                    onChange={(e) => setData({...data, password: e.target.value})}
                  />
                  <Button variant='outline-secondary' id='button-addon2' onClick={event =>  window.location.href='/home'}>
                    Enter <RiLockPasswordLine className='icon' />
                  </Button>
                </InputGroup>
              </div>
            </form>
          </div>
          </>
    );
};
