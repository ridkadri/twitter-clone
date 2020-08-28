import styled from 'styled-components';

export const FeedContainer = styled.div`
    flex: 0.5;
    border-right: 1px solid #39444D;
    min-width: fit-content;
    overflow-y: scroll;
    -ms-overflow-style: none; /*IE and Edge*/
    scrollbar-width: none; /*Firefox*/
    -webkit-scrollbar: none; /*Hide scrollbar for Chrome, Safari and Opera*/

`;

export const FeedHeader = styled.div`
    position: sticky;
    top: 0;
    background-color: var(--twtter-background);
    z-index: 100;
    border: 1px solid #39444D;
    padding: 15px 20px;
`;

export const FeedHeading = styled.h2`
    font-size: 20px;
    font-weight: 800;
`;

export const FeedImage = styled.img`
    display: flex;
    margin-left: 20px;
    color: var(--twitter-color) !important;
`;