import React, { Component } from 'react';
import Card from '../components/Cards'

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        fetch("https://kekambas-blog.herokuapp.com")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                posts: data
            })
        })
        
    }

    render() {
    return (
        <div>
            <h1 className='text-center'>Posts</h1>
            {this.state.posts.map((p,k) => <Card post={p} key={k}/> )}
        </div>
    );
  }
}