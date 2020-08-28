import React from 'react';

import {TrendsContainer, TrendsDescription, TrendsTopic, TrendsTweets} from './Trends.styles';

const Trends = ({description, topic, numberoftweets}) => {
    return (
        <TrendsContainer>
            <TrendsDescription>{description}</TrendsDescription>
            <TrendsTopic>{topic}</TrendsTopic>
            <TrendsTweets>{numberoftweets}</TrendsTweets>
        </TrendsContainer>
    )
}

export default Trends;
