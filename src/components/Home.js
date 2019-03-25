import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';
import Axios from 'axios';

// import axios

class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: '',
            index: 0,
            posts: [{title: "Loading...",image: 'https://unsplash.it/900/400/?random'}]
        }
    }

    componentWillMount() {
        Axios.get('/api/featured')
            .then(res => { 
               // console.log(res)
                this.setState({
                    featured: res.data,
                    index: (~~(Math.random() * res.data.length) + 0),
                    posts: res.data
                })
            }).catch(err => console.log(err))
     }
    
    render() {

        const posts = this.state.posts.map((c, i) => <BlogThumb key={i} blog={c} /> ) 
     
        return (
            
            <div className="content" >
                <Hero blog={this.state.posts[this.state.index]} />
                <hr/>
                <div className="blog-grid">
                    {posts}      
                </div>
            </div>
        )
    }
}

export default Home;