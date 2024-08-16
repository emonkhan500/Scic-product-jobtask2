import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value
        console.log(email,pass)
        
        
       
          }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse shadow-xl py-36 px-28 border-black border-t-2">

  <div className="card shrink-0 w-full max-w-sm ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        
       
        
        <div className="form-control mt-6">
          <button  className="btn  bg-[#D1A054]">Sign In</button>
        </div>
      </form>
      <p className='text-[#D1A054] text-center mt-'>New here? <Link to='/register'><span className='text-xl'>Create a New Account</span></Link></p>

      <div className='flex mt-3 gap-4 justify-center'>
        
        <img  src='' alt="" />
        
      </div>
    </div>
    <div className="text-center lg:text-left">
      <img src='' alt="" />
    </div>
    
  </div>
</div>
    );
};

export default Login;