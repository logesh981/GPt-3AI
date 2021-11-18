import styled from 'styled-components';
import {scaleupcenter} from '../../Animations';

export const NavBar1=styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:2rem 6rem;
    @media screen and (max-width: 700px) {
    
        padding: 2rem 4rem;
    
    }
    @media screen and (max-width: 500px) {
    
    padding: 2rem;

    }
`;

export const NavBarLinks=styled.div`
    flex:1;
    display: flex;
    justify-content:flex-start;
    align-items:center;

`;

export const NavBarLinksLogo=styled.div`

    margin-right: 2rem;

`;

export const Logo=styled.img`
    width:62.56px;
    height: 16.02px;
`;

export const NAVBarLinksContainer=styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1050px) {
        display:none;
    }

`
export const NavBarSign=styled.div`
    display:flex;
    justify-content:flex-end;
    align-items: center;
    @media screen and (max-width: 550px) {
        display:none;
    }

`
export const StyledPara= styled.p`
    color:#fff;
    font-family:var(--font-family);
    font-weight: 500;
    font-size:18px;
    line-height: 25px;
    text-transform:capitalize;

    margin:0 1rem;
    cursor:pointer;

`
export const StyledButton=styled.button`
    padding:0.5rem 1rem;
    color:#fff;
    background:#ff4820 ;
    font-family:var(--font-family);
    font-size:18px;
    line-height:25px;
    border-radius:5px;
    border:0;
    outline:none;
    cursor:pointer;

`;
export const NavBarMenu=styled.div`
    margin-left: 1rem;

    display: none;
    position: relative;
    @media screen and (max-width: 1050px) {
        display:flex;
    }


`;

export const NavBarMenuContainer=styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    
    text-align: end;
    background: var(--color-footer);
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 40px;
    margin-top: 1rem;
    min-width: 210px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);
    animation: ${scaleupcenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    p{
        margin: 1rem 0;
    }
    @media screen and (max-width: 550px) {
        top:20px
    }

`;

export const NavBarMenuContainerLinks=styled.div``;

export const NavBarMenuContainerLinksSign=styled.div`
    display: none;
    @media screen and (max-width: 550px) {
        display:block;
    }
`;



