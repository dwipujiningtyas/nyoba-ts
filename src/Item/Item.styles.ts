import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button {
        border-radius: 0 0 20px 20px;
    }

    img {
        
        max-height: 200px;
        margin-left: auto;
        margin-right: auto;
        object-fit: cover;
        border-radius: 80px 80px 0px 0px;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;