import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Register from './views/Register';
import { Routes, Route } from 'react-router-dom';
import PostList from './views/PostList'
import NewPost from './views/NewPost'


export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: null,
        message: null,
        category: null
      }
    }
  
    login = (token) => {
      this.setState({
        loggedIn: token
      })
    }
  
    logout = () => {
      this.setState({
        loggedIn: null
      })
     
    }
  
    flashMessage = (message, category='primary') => {
      this.setState({
        message, category
      })
    }
  render() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="Login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                    <Route path="/" element={<PostList /> } />
                    <Route path="/Post" element={<PostList /> } />
                    <Route path="/NewPost" element={<NewPost /> } />
                    </Routes>
                
            </div>
        </>
    );
}
}