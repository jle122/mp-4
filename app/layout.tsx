"use client";

import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const StyledDiv = styled.body`
  background-color: lightgreen;
  font-family: Arial, Helvetica, sans-serif;
  color: navy;
  text-align: center;
`
export default function RootLayout(
  {children, }: Readonly<{children: React.ReactNode;}>
) {
  return (
    <html lang="en">
        <StyledDiv>
          <Header/>
          {children}
        </StyledDiv>
    </html>
  )
}