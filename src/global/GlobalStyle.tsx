// Imports
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// Global Style
export const GlobalStyle = createGlobalStyle`
  // Reseting HTML
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto Mono', monospace;
    background-color: #292d35;
    color: #ffffff;
  }
  input{
    outline: none;
    border: none;
  }
`;

export const PageContainer = styled.main`
	width: min(1440px, 80%);
	margin-inline: auto;
`;
