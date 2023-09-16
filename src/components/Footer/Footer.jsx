import React from "react";
import styled from "styled-components";
import logo from '../../assets/img/logo.svg'
import { colorFondo } from "../UI/variables";
import { LogoHeader } from "../Header/Header";

const FooterStyled = styled.footer`
    background-color: ${colorFondo};
    display: flex;
    justify-content: center;
    height: 10rem;
    position: absolute;
    bottom: 0;
    width: 100%;
`

const Footer = () =>{
    return (
        <FooterStyled>
            <LogoHeader src={logo} alt="logo aluraflix"/>
        </FooterStyled>
    )
}

export default Footer