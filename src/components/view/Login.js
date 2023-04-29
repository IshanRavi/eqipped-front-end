import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Login.css'
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [formEmailData, setFormEmailData] = useState({
    recipient:''
  });

  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track login status
  var isLoggedIn = false;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formData.username == null || formData.username == '') {
        toast('Kindly Enter User Name', {
          position: 'top-center'
        });

      }
      else if (formData.password == null || formData.password == '') {
        toast('Kindly Enter Password', {
          position: 'top-center'
        });
      }
      else {

        const response = await fetch(`${baseUrl}/user/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.status == 503) {
          toast('Server is down', {
            position: 'top-center'
          });
        } else if (response.status == 500) {
          toast('Invalid User Name & Password', {
            position: 'top-center'
          });
        }
        else if (response.ok) {

          const jsonData = await response.json();
          localStorage.setItem('userData', jsonData);
          // Handle successful login response

          console.log(jsonData);
          if (jsonData.STATUS == "SUCCESS") {
            // setIsLoggedIn(true);
            isLoggedIn = true
            localStorage.setItem('isLoggedIn', isLoggedIn);
            console.log('is logged In : ' + localStorage.getItem('isLoggedIn'));
            navigate('/dashboard');
            window.location.reload();
            // localStorage.clear();
            // localStorage.getItem('isLoggedIn');
          }
          else {
            toast('Password is Invalid', {
              position: 'top-center'
            });
          }
        } else {

          throw new Error('Failed to login');
        }
      }
    } catch (err) {
      // Handle error
      toast('Server is down', {
        position: 'top-center'
      });
      console.error(err);
    }
  }
  const handleForgetPasswordSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formEmailData.recipient == null || formEmailData.recipient == '') {
        toast('Kindly Enter Email Id', {
          position: 'top-center'
        });

      }
      else {

        const response = await fetch(`${baseUrl}/password/forgetPassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formEmailData)
        });
        if (response.status == 503) {
          toast('Server is down', {
            position: 'top-center'
          });
        } else if (response.status == 500) {
          toast('Email Id is not register', {
            position: 'top-center'
          });
        }
        else if (response.ok) {

          const jsonData = await response.json();
          // localStorage.setItem('userData', jsonData);
          // Handle successful login response

          console.log(jsonData);
          if (jsonData.STATUS == "SUCCESS") {
            // setIsLoggedIn(true);
            // isLoggedIn = true
            // localStorage.setItem('isLoggedIn', isLoggedIn);
            // console.log('is logged In : ' + localStorage.getItem('isLoggedIn'));
            // navigate('/dashboard');
            // window.location.reload();
            // localStorage.clear();
            // localStorage.getItem('isLoggedIn');
            toast('congratulations ! You are Successful Reset Your Password. Default Password has been send to your email Id', {
              position: 'top-center'
            });

          }
          else {
            toast('Email Id is not Present in our Data Base', {
              position: 'top-center'
            });
          }
        } else {

          throw new Error('Failed to Reset your password');
        }
      }
    } catch (err) {
      // Handle error
      toast('Server is down', {
        position: 'top-center'
      });
      console.error(err);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }
  const handleEmailInputChange = (event) => {
    const { name, value } = event.target;
    setFormEmailData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (
    <div>

      <div class="body">

        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form onSubmit={handleFormSubmit}>
              <label class="label1" for="chk" aria-hidden="true">Login</label>


              <input required="" name="username" type="text" id="username"
                value={formData.username} onChange={handleInputChange} placeholder="username" />

              <input required="" name="password" type="password" id="password" value={formData.password}
                onChange={handleInputChange}
                placeholder="Password" />
              <button className="buttonLogin" type="submit" onClick={handleFormSubmit} >Login</button>

            </form>
            <ToastContainer />


          </div>


          <div class="login">

            <form onSubmit={handleFormSubmit}>
              <label class="label2" for="chk" aria-hidden="true">Forget Password</label>
              <input type="email" name="email" onChange={handleEmailInputChange} placeholder="Email"  value={formEmailData.recipient} required="" />


              <button className="buttonLogin" onClick={handleForgetPasswordSubmit}>Submit</button>

            </form>

          </div>


        </div>
      </div>


    </div>




  );
};

export default Login;
