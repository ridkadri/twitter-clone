import styled from 'styled-components';
import { Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

export const SidebarContainer = styled.div`
    border-right: 1px solid #39444D;
    flex: 0.2;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;

    }
`;

export const SidebarTwitterIcon = styled(TwitterIcon)`
    font-size: 30px !important;
    margin-left: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 800px) {
        padding: 10px;

    }
`;

export const SidebarTweetButton = styled(Button)`
    background-color: var(--twitter-color) !important;
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    border-radius: 30px !important;
    height: 50px !important;
    margin-top: 20px !important;
`;