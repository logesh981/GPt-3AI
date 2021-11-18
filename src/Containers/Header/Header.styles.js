import styled from 'styled-components';

export const Header1=styled.div`
    display:flex;
    flex-direction:row;
    padding:4rem 6rem;
    @media screen and (max-width: 1050px){
        flex-direction: column;
    }
    @media screen and (max-width: 768px){
        padding:4rem;
    }
    @media screen and (max-width: 550px){
        padding:4rem 2rem;
    }
`;

export const HeaderContent=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right:5 rem;

    @media screen and (max-width: 1050px){
        margin:0 0 3 rem;
    }

    h1{
        font-family:var(--font-family);
        font-weight:800;
        font-size:62px;
        line-height:75px;
        letter-spacing: -0.04em;
        @media screen and (max-width: 650px){
            font-size: 48px;
            line-height: 60px;
        }
        @media screen and (max-width: 490px){
            font-size: 36px;
            line-height: 48px;
        }
    }
    p{
        font-family:var(--font-family);
        font-weight:400;
        font-size:20px;
        line-height:28px;
        color:var(--color-text);
        @media screen and (max-width: 650px){
            font-size: 16px;
            line-height: 24px;
            /* padding:6px; */
        }
        @media screen and (max-width: 490px){
            font-size: 14px;
            line-height: 24px;
            margin:8px;
        }
    }
`;

export const HeaderContentInput=styled.div`
    width:100%;
    margin: 2rem 0 1rem;

    display:flex;
    flex-direction: row;
    input {
        flex: 2;
        width: 100%;
        min-height: 50px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        background: var(--color-footer);
        border: 2px solid var(--color-footer);
        padding: 0 1rem;
        outline: none;
        color: #fff;

        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        @media screen and (max-width: 650px){
            font-size: 16px;
            line-height: 24px;
        }
        @media screen and (max-width: 490px){
            font-size: 12px;
            line-height: 16px;
        }
}
    button {
        flex: 0.6;
        width: 100%;
        min-height: 50px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        background: #FF4820;
        border: 2px solid #FF4820;
        padding: 0 1rem;
        color: #fff;
        cursor: pointer;
        outline: none;

        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        @media screen and (max-width: 650px){
            font-size: 16px;
            line-height: 24px;
        }
        @media screen and (max-width: 490px){
            font-size: 12px;
            line-height: 16px;
        }
    }

`;

export const HeaderContentPeople=styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    margin-top: 2rem;
    @media screen and (max-width: 650px){
        flex-direction:column;
    }
    img {
    width: 181.79px;
    height: 38px;
    }
    p {
    margin: 0 0 0 1rem;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 650px){
        margin:0;
    }
    }


`;

export const HeaderImage=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    width: 100%;
    height: 100%;
    }
`;
