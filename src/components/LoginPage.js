import React from 'react'
import '../css/LoginPage.css';

export default function LoginPage() {
  return (
    <>
      <div className='form'>
       
        <div className='form-view1'>
         
            
          <div className='text-view'>
            <h1 className='h2'>Hello!</h1>
            <p className=''>Sign in to your account</p>
          </div>
            <input className='uname u1' placeholder='Email' >


            </input>
            <input className='pass u1'  placeholder='Password' >

            </input>
            <div className='fgp' >
             <div className='lower-f'>
             
              <input type="checkbox" className='ch-b' ></input>
              <div className='remember-me'>Remember me</div>
              

             </div>
             <div className='fp'>
             <p className='fp-1'>forget password ?</p>
             </div>
            </div>

            <button className='bt-login'>
              Sign In

            </button>
        </div>
        
        
        <div className='form-view2'>
          <div className='form-view3'></div>
          
        </div>
        
      </div>
    </>
  )
}
