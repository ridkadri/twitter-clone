import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import EventIcon from '@material-ui/icons/Event';

import db from '../../firebase';

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Ridwan Kadri',
            username: 'ridCuDi',
            text: tweetMessage,
            avatar:'https://avatars0.githubusercontent.com/u/18399349?s=460&u=5159658fd5b244b38dc8365207c9be0c09524177&v=4',
            image: tweetImage
        });

        setTweetMessage('');
        setTweetImage('');
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src='https://avatars0.githubusercontent.com/u/18399349?s=460&u=5159658fd5b244b38dc8365207c9be0c09524177&v=4'/>
                    <input 
                        onChange={(e)=> setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type='text'
                    />
                </div>
                <div className='tweetBox_action'>
                    <div className='tweetBox_icons'>
                        <ImageIcon/>
                        <GifIcon/>
                        <PollIcon/>
                        <SentimentSatisfiedIcon/>
                        <EventIcon/>
                    </div>
                    <Button onClick={sendTweet} type='submit' className='button'>Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox;
