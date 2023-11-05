import React from 'react'
import Header from './Header'
import ElementAdder from './ElementAdder'
// import axios from "axios"
// import { useForm, } from 'react-hook-form'


const CreatePost = () => {
  
 
  return (
    <>
    <Header/>
      
    <div className="create-cont">
      <div className="feature">
        <ElementAdder/>

      </div>
    </div>
    </>
  )
}


export default CreatePost
