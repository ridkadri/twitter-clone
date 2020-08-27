import React from 'react';
import './UserFollow.css';

import {Avatar, Button} from '@material-ui/core';

const UserFollow = ({avatar, displayName, username}) => {
    return (
        <div>
        <div className='widgets_wtfollow_userblock'>
        <div className='widgets_wtfollow_userblock_avatar'>
            <Avatar src={avatar}/>
        </div>
        <div className='widgets_wtfollow_userblock_details'>
            <h3 className='displayName'>{displayName}</h3>
            <p className='username'>{username}</p>
        </div>
            <Button variant='outlined' size='medium' className='button'>Follow</Button>
    </div>
        </div>
    )
}

export default UserFollow;
