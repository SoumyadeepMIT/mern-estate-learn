import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormdata] = React.useState({});
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    }
    catch(err){
      setLoading(false);
      setError(err.message);
    }
    console.log(data);
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input placeholder='Username' type='text' id='username' className='border rounded-lg p-3'onChange={handleChange}/>
        <input placeholder='Email' type='email' id='email' className='border rounded-lg p-3'onChange={handleChange}/>
        <input placeholder='Password' type='password' id='password' className='border rounded-lg p-3'onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 p-3 text-white uppercase rounded-lg hover:opacity-95 disabled:opacity-80'>
          { loading? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
