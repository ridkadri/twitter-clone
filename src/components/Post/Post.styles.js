import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #263341;
    padding-bottom: 10px;
`;

export const PostAvatar = styled.div`
    padding: 20px;
`;

export const PostBody = styled.div`
    flex: 1;
    padding: 10px;
`;

export const PostHeader = styled.div`
    font-size: 15px;
    color: red;
`;

export const PostHeaderSpecial = styled.span`
    font-weight: 600;
    font-size: 15px;
    color: gray;
`;

export const PostHeaderDesc = styled.div`
    margin-bottom: 10px;
    font-size: 15px;
`;

export const PostHeaderText = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 800;
`;

export const PostBodyImage = styled.img`
    border-radius: 20px;
    width: 500px;
`;

export const PostFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;