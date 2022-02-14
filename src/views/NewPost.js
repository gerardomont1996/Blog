import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPost(props) {
    let navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        let title = e.target.title.value;
        let body = e.target.body.value;

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + props.token);
        myHeaders.append("content-Type", "application/json");

        let data = JSON.stringify({
            "title": title,
            "body": body
        })

        await fetch('https://kekambas-blog.herokuapp.com/posts', {
            method: "POST",
            headers: myHeaders,
            body: data
        }).then(res => res.json())
            .then(data => {
                navigate('/')
            })
    }
    return (
        <>
            <h1 className='text-center my-5'>New Post</h1>
            <form className='mt-5 w-50 mx-auto'>
                <fieldset className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' placeholder='Title' className='form-control'/>
                </fieldset>

                <fieldset className='form-group' onSubmit={handleForm}>
                    <label htmlFor='content'>Text Here </label>
                    <input type='text' name='content' placeholder='Text Here' className='form-control'/>
                </fieldset>
                <input type='submit' value='Post' className='btn btn-outline-primary  mt-3'/>
            </form>
        </>
    )
}
