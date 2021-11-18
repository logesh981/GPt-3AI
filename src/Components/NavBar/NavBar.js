import React,{useState} from 'react';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import { NavBar1,
    NavBarLinks,
    NavBarLinksLogo,
    Logo,
    NAVBarLinksContainer,
    StyledPara,
    NavBarSign,
    StyledButton,
    NavBarMenu,
    NavBarMenuContainer,
    NavBarMenuContainerLinks,
    NavBarMenuContainerLinksSign

} from './NavBar.styles';
import logo from '../../assets/logo.svg'
const NavBar = ()=> {
    const[toggleMenu,setToggleMenu]=useState(false);
    return (
        <NavBar1>
            <NavBarLinks>
                <NavBarLinksLogo>
                    <Logo src={logo} alt="Logo"/>
                </NavBarLinksLogo>
                <NAVBarLinksContainer>
                    <StyledPara><a href="#home">Home</a></StyledPara>
                    <StyledPara><a href="#wgpt3">What is GPT?</a></StyledPara>
                    <StyledPara><a href="#possibility">open AI</a></StyledPara>
                    <StyledPara><a href="#Features">Case Studies</a></StyledPara>
                    <StyledPara><a href="#blog">Library</a></StyledPara>
                </NAVBarLinksContainer>
            </NavBarLinks>
            <NavBarSign>
                <StyledPara>Sign in</StyledPara>
                <StyledButton >Sign Up</StyledButton>
            </NavBarSign>
            <NavBarMenu>
                {
                    toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
        <NavBarMenuContainer >
          <NavBarMenuContainerLinks className="gpt3__navbar-menu_container-links">
            <StyledPara><a href="#home">Home</a></StyledPara>
            <StyledPara><a href="#wgpt3">What is GPT3?</a></StyledPara>
            <StyledPara><a href="#possibility">Open AI</a></StyledPara>
            <StyledPara><a href="#features">Case Studies</a></StyledPara>
            <StyledPara><a href="#blog">Library</a></StyledPara>
          </NavBarMenuContainerLinks>
          <NavBarMenuContainerLinksSign>
            <StyledPara>Sign in</StyledPara>
            <StyledButton type="button">Sign up</StyledButton>
          </NavBarMenuContainerLinksSign>
        </NavBarMenuContainer>
        )}
            </NavBarMenu>
        </NavBar1>
    )
}

export default NavBar

