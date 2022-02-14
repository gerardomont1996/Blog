import React, { Component } from 'react';

export default class Register extends Component {
    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(e);

        let password = e.target.password.value;
        let confirmPass = e.target.confirmPass.value;
        if (password !== confirmPass){
            console.log('The passwords are incorrect')
            return
        }
        let myHeaders = new Headers();
        myHeaders.append('content-type', 'applicaton/json')

        let data = JSON.stringify({
            username: e.target.username.value,
            email: e.target.email.value,
            password: password
        })
        fetch('https://kekambas-blog.herokuapp.com/auth/users', {
            method: 'POST',
            headers: myHeaders,
            body: data
        }) .then (res => res.json())
           .then(data => console.log(data))
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h3 className='text-center'>Register Here</h3>
        <div className='form-group'>
            <fieldset>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' className='form-control' placeholder='Username' />
            </fieldset>
            <fieldset>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' className='form-control' placeholder='Email' />
            </fieldset>
            <fieldset>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' className='form-control' placeholder='Password' />
            </fieldset>
            <fieldset>
                <label htmlFor='confirmPass'>Confirm Password</label>
                <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password' />
            </fieldset>
            <input type='submit' className='btn btn-outline-primary  mt-3' value='Register' />
        </div>
    </form>
      
    );
}
}