import React from 'react';
import './Trends.css';

const Trends = ({description, topic, numberoftweets}) => {
    return (
        <div className='trends'>
            <p className='trends_description'>{description}</p>
            <h3 className='trends_topic'>{topic}</h3>
            <p className='trends_tweets'>{numberoftweets}</p>
        </div>
    )
}

export default Trends;
