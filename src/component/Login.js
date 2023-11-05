import React from 'react'
import './log.css'
import { useForm, } from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { accountholder } from '../redux/user/actionuser'
import Loading from './Loading';
import logo from "./logoph.jpg";
import logimg from './loginimg.jpg';


const Login = () => {
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
        // console.log(data,"---")
        dispatch(accountholder(data))

    }

    // console.log(user,"-- state --")

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
            <p className="logodiv">
                <img src={logo} alt="logo" draggable="false" />
            </p>
            <p>Contain basic and advance level web related post</p>
            {err}
            <h2>Welcome,</h2>
            {loading? <span style={{color:"white"}}>password mismatch</span> :null}
            <form onSubmit={handleSubmit(setuser, handleErrors)}>
                    <p>useremail</p>
                    <span style={{color:"red"}}>{errors?.email && errors?.email.message}</span>
                    <input type="email" name='email' placeholder='abc@gmail.com' {...register('email', registerOptions.email)}/>
                    <p>password</p>
                    <span style={{color:"red"}}>{errors?.password && errors?.password.message}</span>
                    <input type="password" name='password' placeholder='*******' {...register('password', registerOptions.password)} />
                    <br />
                    <button> signin / singup </button>
            </form>
            <br />
        </div>
    </div>
      
    </>
  )
}

export default Login
