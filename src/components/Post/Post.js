import React from 'react';
import './Post.css';

import {Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({
    displayName,
    username,
    text,
    image,
    avatar
}) => {
    return (
        <div className='post'>
            <div className='post_avatar'>
                <Avatar src='https://avatars0.githubusercontent.com/u/18399349?s=460&u=5159658fd5b244b38dc8365207c9be0c09524177&v=4'/>
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>
                            Alhaji Rid {' '} <span className='post_headerSpecial'>@ridCuDi</span>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>I am building the twitter clone with React!</p>
                    </div>
                </div>
                <img src='https://media3.giphy.com/media/2n8480RCQ2jBe/giphy.webp?cid=ecf05e47e29kwpq9emcek9fakg3nz2juwokffe83e1gg474r&rid=giphy.webp' alt=''/>
                <div className='post_footer'>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>
                </div>
            </div>
        </div>
    )
}

export default Post;
