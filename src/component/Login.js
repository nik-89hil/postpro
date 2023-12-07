import React from 'react'
import './log.css'
import { useForm, } from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { accountholder } from '../redux/user/actionuser'
import Loading from './Loading';
import logo from "./logoph.jpg";
import logimg from './loginimg.jpg';


const Login = () => {
    const [login,setLogin] = React.useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading , err ,user} = useSelector(state => state.user)
    const handleErrors = (errors) => { };

    const registerOptions = {
        email: { required: "write your email" },
        password: { required: "create password" },
    }


    const setuser = (data) =>{
        dispatch(accountholder(data))
    }

    
    if(user.length >0){
        navigate("/posts")
    }
        
   
        
    



  return (
    <>
    {loading?<Loading/>:null}
    <div className="login-cont">
        <div className="left">
            <img src={logimg} alt='logo-image' draggable="false"  />
        </div>
        <div className="right-cont">
            <h1>
               {login?"Login":"Register"}
            </h1>
            <br />
            <h2>Widepost.com</h2>
            <p>Articles related web tools and technologies with code Image. start your journey now.</p>
            {err}
            <h4>Welcome,</h4>
            <br />
            {loading? <span style={{color:"black"}}>password mismatch</span> :null}
            <form onSubmit={handleSubmit(setuser, handleErrors)}>
                    <label htmlFor='email'>useremail</label><br />
                    <span style={{color:"red"}}>{errors?.email && errors?.email.message}</span>
                    <input type="email" name='email' placeholder='abc@gmail.com' {...register('email', registerOptions.email)}/>
                    <br />
                    <label htmlFor='password'>password</label><br />
                    <span style={{color:"red"}}>{errors?.password && errors?.password.message}</span>
                    <input type="password" name='password' placeholder='*******' {...register('password', registerOptions.password)} />
                    <br />
                    <button>{login?"Login":"Create Account"}</button>
            </form>
            <button className='account' onClick={()=>setLogin(!login)}>
                {login?"New user?":"Already have an account? "}
            </button>
            <br />
        </div>
    </div>
      
    </>
  )
}

export default Login
