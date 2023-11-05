import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Tester = () => {
  const navigate = useNavigate();

  

  const postMultiFile = async(filelist) =>{
    console.log(filelist,"++ multiple files");
    const formdata = new FormData();
    for (let index = 0; index < filelist.length; index++) {
      const file = filelist[index];
      formdata.append("files",file)
    }

    const result = await axios.post("http://localhost:8080/post/images",formdata);
    console.log(result.data.filename[0],"{{{ server }}}")
    const arr = result.data.filename.map((e)=>{
      return e.filename
    })
    console.log(arr)

    localStorage.setItem("imageupload",JSON.stringify(arr));

    if(result.data.success){
      navigate("/createPost")
    }
  }

  

    

  return (
    <>
      <div style={{color:"white"}}> 
        <h1>Select your multiple files</h1> 
        <input type="file" multiple onChange={(event)=>{
          const filelist = event.target.files;
          console.log(filelist,"__input file");
          postMultiFile(filelist);

        }} />
      </div> 
      
    </>
  )
}

export default Tester
