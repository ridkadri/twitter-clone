import styled from 'styled-components';
import { Button } from '@material-ui/core';


export const TweetBoxContainer = styled.div`
    padding-bottom: 10px;
    padding-right: 10px;
    border-bottom: 12px solid #263341;

    @media screen and (max-width: 800px) {
        height: 200px;

    }
`;

export const TweetBoxForm = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TweetBoxInputContainer = styled.div`
    padding: 20px;
    display: flex;
`;

export const TweetBoxInput = styled.input`
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
    background-color: var(--twitter-background);
    color: white;
`;

export const TweetBoxAction = styled.div`
    display: flex;
    margin-left: 80px;
    margin-top: -20px;
`;

export const TweetBoxIcons = styled.div`
    color: var(--twitter-color);
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`;

export const TweetBoxButton = styled(Button)`
    background-color: var(--twitter-color) !important;
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    border-radius: 30px !important;
    width: 80px;
    height: 40px !important;
    margin-top: 20px !important;
    margin-left: auto !important;
`;