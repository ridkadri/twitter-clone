import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const UserBlock = styled.div`
    display: flex;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #263341;
`;

export const UserBlockDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserBlockDisplayName = styled.div`
    margin-left: 10px;
    font-size: 18px;
    font-weight: 800;
`;

export const UserBlockUserName = styled.div`
    margin-left: 10px;
`;

export const UserBlockButton = styled(Button)`
    margin-left: 90px !important;
    border-radius: 20px !important;
    border-color: var(--twitter-color) !important;
    color: var(--twitter-color) !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    font-size: 15px !important;

`;