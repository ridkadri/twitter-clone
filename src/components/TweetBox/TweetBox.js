import React, {useState} from 'react';

import {Avatar} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import EventIcon from '@material-ui/icons/Event';

import db from '../../firebase';

import {
    TweetBoxContainer, 
    TweetBoxForm, 
    TweetBoxInputContainer, 
    TweetBoxInput,
    TweetBoxAction,
    TweetBoxIcons,
    TweetBoxButton
} from './TweetBox.styles';

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
        <TweetBoxContainer>
            <TweetBoxForm>
                <TweetBoxInputContainer>
                    <Avatar src='https://avatars0.githubusercontent.com/u/18399349?s=460&u=5159658fd5b244b38dc8365207c9be0c09524177&v=4'/>
                        <TweetBoxInput input
                            onChange={(e)=> setTweetMessage(e.target.value)}
                            value={tweetMessage} 
                            placeholder="What's happening?" 
                            type='text'
                        />
                </TweetBoxInputContainer>
                <TweetBoxAction>
                    <TweetBoxIcons>
                        <ImageIcon/>
                        <GifIcon/>
                        <PollIcon/>
                        <SentimentSatisfiedIcon/>
                        <EventIcon/>
                    </TweetBoxIcons>
                    <TweetBoxButton onClick={sendTweet} type='submit'>Tweet</TweetBoxButton>
                </TweetBoxAction>
            </TweetBoxForm>
        </TweetBoxContainer>
    )
}

export default TweetBox;
