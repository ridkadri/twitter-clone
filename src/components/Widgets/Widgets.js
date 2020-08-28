import React from 'react';

import UserFollow from '../UserFollow/UserFollow';
import Trends from '../Trends/Trends';

import {
    WidgetContainer, 
    WidgetInputContainer, 
    WidgetSearchIcon, 
    WidgetInput,
    WidgetsTrendContainer,
    WidgetsTrendHeader,
    WidgetsTrendHeaderText,
    WidgetsTrendHeaderIcon,
    ShowMore,
    WtfollowContainer,
    WtfollowHeader,
    WtfollowContainerHeading,
    Footer,
    FooterTop,
    FooterDown 
} from './Widgets.styles';

const Widgets = () => {
    return (
        <WidgetContainer>
            <WidgetInputContainer>
                <WidgetSearchIcon/>
                <WidgetInput input placeholder='Search Twitter' type='text'/>
            </WidgetInputContainer>
            <WidgetsTrendContainer>
                <WidgetsTrendHeader>
                    <WidgetsTrendHeaderText>Trends for you</WidgetsTrendHeaderText>
                    <WidgetsTrendHeaderIcon/>
                </WidgetsTrendHeader>
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
                    <ShowMore>Show more</ShowMore>
            </WidgetsTrendContainer>
            <WtfollowContainer>
                <WtfollowHeader>
                    <WtfollowContainerHeading>Who to follow</WtfollowContainerHeading>
                </WtfollowHeader>
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
                <ShowMore>Show more</ShowMore>
            </WtfollowContainer>
            <Footer>
                <FooterTop>
                    <p>Terms</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                    <p>Ads Info</p>
                    <p>More</p>
                </FooterTop>
                <FooterDown>
                    <p>© 2020 Twitter, Inc.</p>
                </FooterDown>
            </Footer>
        </WidgetContainer>
    )
}

export default Widgets;
