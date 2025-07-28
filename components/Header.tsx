"use client";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
    margin: 2px;
`

export default function Header() {

    return (
        <header>
            <h1>Dog API Display</h1>
            <nav>
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="display">Display</StyledLink>   
            </nav>
        </header>
    )
}