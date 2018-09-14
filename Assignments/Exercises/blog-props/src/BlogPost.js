import React from 'react'
import './BlogPost.css'

const BlogPost = props => {
    return (
        <div className='wrapper'>
            <h1 className='blogposth1'>{props.title}</h1>
            <h3 className='blogposth3'>{props.subtitle}</h3>
            <p className='blogpostp'>Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default BlogPost