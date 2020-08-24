import React from 'react';
import './Sidebar.css';
//components
import SidebarOption from '../SidebarOption/SidebarOption';
//material-UI
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/*Twitter Icon */}
            <TwitterIcon className='sidebar_twitterIcon'/>

            <SidebarOption Icon={HomeIcon} text='Home'/>
            <SidebarOption Icon={SearchIcon} text='Explore'/>
            <SidebarOption Icon={NotificationsIcon} text='Notifications'/>
            <SidebarOption Icon={MailOutlineIcon} text='Messages'/>
            <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
            <SidebarOption Icon={ListAltIcon} text='Lists'/>
            <SidebarOption Icon={PersonOutlineIcon} text='Profile'/>
            <SidebarOption Icon={MoreHorizIcon} text='More'/>

            {/*Tweet Button */}
            <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;
