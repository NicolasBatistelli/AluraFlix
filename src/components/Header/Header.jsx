import React from "react";
import styled from "styled-components";
import logo from '../../assets/img/logo.svg'
import { colorFondo } from "../UI/variables";
import { Link } from "react-router-dom";

const StyleHeader = styled.header`
    display: flex;
    justify-content: space-between;
    border: 1px solid ${colorFondo};
    background: ${colorFondo};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const LogoHeader = styled.img`
    width: 11.258rem;
    height: 3.375rem;
    cursor: pointer;
`

export const ButtonHeader = styled.button`
    width: 11.258rem;
    height: 3.375rem;
    flex-shrink: 0;
    background-color: #000000E5;
    color: #F5F5F5;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.313rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    border: 1px solid #F5F5F5;
    cursor: pointer;
`

const Header = () =>{
    return (
        <>
        <StyleHeader>
            <Link to='/'>
                <LogoHeader href='/' src={logo} alt="logo aluraflix"/>
            </Link>
            
            <Link to='/NewVideo'>
                <ButtonHeader>
                    Nuevo Video
                </ButtonHeader> 
            </Link>
            </StyleHeader>
        </>
    )
}

export default Header