import React from 'react'
import './detailstyle.css'
import { useForm, } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ElementAdder = () => {
    const [postdata, setPostData] = React.useState({});
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleErrors = (errors) => { };

    const sendData = (data) => {

        axios.post("https://widepost-api.onrender.com/post/createpost", {
            ...data,
            imgarr:JSON.parse(localStorage.getItem("imageupload"))
        }).then((response) =>setPostData(response.data));
    }

    const registerOptions = {
        files: { required: "please attach file with it" },
        intro: { required: "explain in details about topic" },
    }


 

    if(postdata.success){
        navigate("/posts")
    }
    


    return (
        <>
            <span style={{ color: "red" }}>
                {
                    (errors?.files && errors?.files.message) || (errors?.intro && errors?.intro.message)
                }
            </span>


        <h1 style={{color:"white"}}>{
            postdata &&
            postdata.success?"send successfully": null
            }
        </h1>

            <form className='create-form' encType='multipart/form-data'  onSubmit={handleSubmit(sendData, handleErrors)}>
                <h1>
                    Title : <br />
                    <textarea type="text" name='title' rows={5} cols={100} {...register('title', registerOptions.intro)}/>
                </h1>
            
                <h1>
                    Introduction : <br />
                    <textarea type="text" name='intro' rows={5} cols={100} {...register('intro', registerOptions.intro)}></textarea>
                </h1>
                <h1>
                    paragraphs : <br />
                    <span>use @ for new line in paragraph</span> <br/>
                    <textarea type="text" name='summary' rows={5} cols={100} {...register('summary', registerOptions.intro)}></textarea>
                </h1>
                <h1>
                    Conclusion: <br />
                    <textarea type="text" name='conc' rows={5} cols={100} {...register('conc', registerOptions.intro)}></textarea>

                </h1>
                <h1>
                    Tags: <br />
                    <input type="text" name='tags' {...register('tags', registerOptions.intro)} />
                </h1>
                <h1>
                    Author name : <br />
                    <input type="text" name='author' {...register('author', registerOptions.intro)} />
                </h1>

                <input id='submit' type="submit" value="submit" />
            </form>

       
            

        </>
    )
}

export default ElementAdder
