import React, { forwardRef } from 'react';


import {Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import {
    PostContainer, 
    PostAvatar, 
    PostBody, 
    PostHeaderSpecial, 
    PostHeaderDesc,
    PostHeaderText,
    PostBodyImage,
    PostFooter
} from './Post.styles';

const Post = forwardRef(
    ({ displayName,username,text,image,avatar },ref) => {
    return (
        <PostContainer ref={ref}>
            <PostAvatar>
                <Avatar src={avatar}/>
            </PostAvatar>
            <PostBody>
                <PostHeaderText>
                    <h3>
                        {displayName}{' '} 
                        <PostHeaderSpecial>
                            {username}
                        </PostHeaderSpecial>
                    </h3>
                </PostHeaderText>
                    <PostHeaderDesc>
                        <p>{text}</p>
                    </PostHeaderDesc>
                <PostBodyImage src={image} alt=''/>
                <PostFooter>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>
                </PostFooter>
            </PostBody>
        </PostContainer>
    )
}
);

export default Post;
