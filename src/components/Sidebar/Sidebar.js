import React from 'react';

//components
import SidebarOption from '../SidebarOption/SidebarOption';

//material-UI
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


import {SidebarContainer, SidebarTwitterIcon, SidebarTweetButton} from './Sidebar.styles';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarTwitterIcon/>
            <SidebarOption Icon={HomeIcon} text='Home'/>
            <SidebarOption Icon={SearchIcon} text='Explore'/>
            <SidebarOption Icon={NotificationsIcon} text='Notifications'/>
            <SidebarOption Icon={MailOutlineIcon} text='Messages'/>
            <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
            <SidebarOption Icon={ListAltIcon} text='Lists'/>
            <SidebarOption Icon={PersonOutlineIcon} text='Profile'/>
            <SidebarOption Icon={MoreHorizIcon} text='More'/>

           <SidebarTweetButton variant='outlined' fullWidth>
                Tweet
           </SidebarTweetButton>
        </SidebarContainer>
    )
}

export default Sidebar;
