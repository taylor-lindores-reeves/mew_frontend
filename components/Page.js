import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import { Helmet } from "react-helmet";

// provides app context with all of theme properties
const theme = {
  grey: "#A8A7A7",
  red: "#CC527A",
  redder: "#E8175D",
  dark: "#1d1f21",
  redgrey: "#281818",
  white: "#ededed",
  fontSize: "16px",
  height: "100%",
  width: "100%"
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  min-height: ${props => props.theme.height};
  width: ${props => props.theme.width};
  position: absolute;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    color: #ededed;
    min-height: 100% !important;
    height: 100%;
    background: #1d1f21;
  }

  body {
    font-family: 'Fira Sans', sans-serif;
    line-height: 2;
    height: 100%;
    position: relative;
  }

  p, h1, h2, h3, h4, h5 {
    color: ${props => props.theme.dark};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Helmet>
          <title>Digital Speed</title>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900&display=swap');"
            rel="stylesheet"
          />
        </Helmet>
        <StyledPage>{this.props.children}</StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
