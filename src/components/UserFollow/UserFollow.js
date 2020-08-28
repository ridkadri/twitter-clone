import React from 'react';

import {Avatar} from '@material-ui/core';

import {
    UserBlock, 
    UserBlockDetails, 
    UserBlockDisplayName, 
    UserBlockUserName, 
    UserBlockButton
} from './UserFellow.styles';

const UserFollow = ({avatar, displayName, username}) => {
    return (
        <UserBlock>
            <Avatar src={avatar}/>
            
            <UserBlockDetails>
                <UserBlockDisplayName>{displayName}</UserBlockDisplayName>
                <UserBlockUserName>{username}</UserBlockUserName>
            </UserBlockDetails>
            <UserBlockButton variant='outlined'>Follow</UserBlockButton>  
        </UserBlock>
    )
}

export default UserFollow;
