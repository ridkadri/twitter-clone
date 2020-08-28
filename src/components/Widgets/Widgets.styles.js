import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

export const WidgetContainer = styled.div`
    flex: 0.3;
`;

export const WidgetInputContainer = styled.div`
    background-color: #263341;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    margin-left: 20px;
    margin-top: 10px;
    align-items: center;
`;

export const WidgetSearchIcon = styled(SearchIcon)`
    color: #8899A6;
`;

export const WidgetInput = styled.input`
    flex: 1;
    margin-left: 10px;
    border: none;
    background-color: #263341;
    font-size: 15px;
    color: white;
`;

export const WidgetsTrendContainer = styled.div`
    border-radius: 20px;
    background-color: #192735;
    margin-left: 20px;
`;

export const WidgetsTrendHeader = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #39444D;
`;

export const WidgetsTrendHeaderText = styled.h2`
    margin-left: 10px;
    font-size: 20px;
    font-weight: 900;
`;

export const WidgetsTrendHeaderIcon = styled(SettingsIcon)`
    margin-left: 140px;
    color: var(--twitter-color);
`;

export const ShowMore = styled.p`
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px;
    font-size: 15px;
    color: var(--twitter-color);
`;

export const WtfollowContainer = styled.div`
    border-radius: 20px;
    background-color: #192735;
    margin-left: 20px;
    margin-top: 10px;
`;

export const WtfollowHeader = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #39444D;
`;

export const WtfollowContainerHeading = styled.div`
    margin-left: 10px;
    font-size: 20px;
    font-weight: 900;
`;

export const Footer = styled.div`
    padding: 20px;
    margin-left: 20px;
    font-size: 13px;
    color: #8899A6;
`;

export const FooterTop = styled.div`
    display: flex;
    justify-content: space-evenly;

`;

export const FooterDown = styled.div`
    margin-top: 10px;
    margin-left: 10px;
`;