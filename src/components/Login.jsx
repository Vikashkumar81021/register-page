import '../components/Login.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa'; 

const Login = () => {
  return (
    <>
      <div className='container'>
        <div className="form-box">
          <h2>Create Account</h2>
          <p>Sign up to get started</p>
          <div className="input-box">
            <input type="text" />
            <label>Name</label>
          </div>
          <div className="input-box">
            <input type="number" />
            <label>Mobile Number</label>
          </div>
          <div className="input-box">
            <input type="text" />
            <label>Location</label>
          </div>
        </div>
        <button className='btn'>Get OTP</button>
       
      </div>
      
      <div className="social-icons">
          <FaFacebook className="facebook-icon" />
          <FaGoogle className="google-icon" />
        </div>
        <div className='have-account'>
          <p>Already have account ?</p>
        </div>
        <div className='login'>
          <p>Login</p>
        </div>
       
    </>
  )
}

export default Login;
