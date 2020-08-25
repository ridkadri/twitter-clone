import React from 'react';
import './Feed.css';

//components
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed_header'>
            <h2>Home</h2>
            </div>
            <TweetBox/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed;
