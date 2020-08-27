import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import UserFollow from '../UserFollow/UserFollow';

import Trends from '../Trends/Trends';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <SearchIcon className='widgets_searchIcon'/>
                <input placeholder='Search Twitter' type='text'/>
            </div>
            <div className='widgets_trends_container'>
                <div className='widgets_trends_container_header'>
                    <h2>Trends for you</h2>
                    <SettingsIcon className='widgets_trends_header_icon'/>
                </div>
                    <Trends
                        description='Technology'
                        topic='Jeff Bezos'
                        numberoftweets='33.9K Tweets'
                    />
                    <Trends
                        description='Hip hop'
                        topic='Jay Z'
                        numberoftweets='5,830 Tweets'
                    />
                    <Trends
                        description='Trending in Ghana'
                        topic='#Kumerica'
                        numberoftweets='7,296 Tweets'
                    />
                    <Trends
                        description='Trending in Ghana'
                        topic='Momo'
                        numberoftweets='98.3K Tweets'
                    />
                    <Trends
                        description='Trending in Ghana'
                        topic='15gh'
                        numberoftweets='2,965 Tweets'
                    />
                    <p className='widgets_showmore'>Show more</p>
            </div>
            <div className='widgets_wtfollow_container'>
                <div className='widgets_wtfollow_container_header'>
                    <h2>Who to follow</h2>
                </div>
                <UserFollow
                    displayName='Jemila'
                    username='@jabdulai'
                    avatar='https://media-exp1.licdn.com/dms/image/C4D03AQFUferhOUY5Xg/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=pxSXXvypQKB1pwY8RZz-LxPNjiDcnOcryWxXMInlvSI'
                />
                <UserFollow
                    displayName='Sarkodie'
                    username='@sarkodie'
                    avatar='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Cus-av6pFoQ23KdHbP5bqwHaFJ%26pid%3DApi&f=1'
                />
                <UserFollow
                    displayName='Mr.Carter'
                    username='@S_C_'
                    avatar='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iyANnOt0QxIUQuaqVaJ3EAHaE8%26pid%3DApi&f=1'
                />
                <p className='widgets_showmore'>Show more</p>
            </div>
            <div className='widgets_footer'>
                <div className='widgets_footer_footertop'>
                    <p>Terms</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                    <p>Ads Info</p>
                    <p>More</p>
                </div>
                <div className='widgets_footer_footerdown'>
                    <p>© 2020 Twitter, Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets;
