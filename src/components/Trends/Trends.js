import React from 'react';
import './Trends.css';

const Trends = ({description, topic, numberoftweets}) => {
    return (
        <div className='trends'>
            <p className='trends_description'>Trending in Ghana</p>
            <h3 className='trends_topic'>15gh</h3>
            <p className='trends_tweets'>2,031 Tweets</p>
        </div>
    )
}

export default Trends
