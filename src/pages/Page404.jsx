import React from "react";
import error from '../assets/img/error.svg'
import styled from "styled-components";

const ErrorImg = styled.img`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 45rem;
`

const Page404 = () => {
    return (
        <main>
            <ErrorImg src={error} alt="404 The page was not found or is not available." />
        </main>
    )
}

export default Page404