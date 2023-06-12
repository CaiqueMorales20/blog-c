// Imports
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// Global Style
export const GlobalStyle = createGlobalStyle`
  // ==================== CSS Variables  ==================== //
  :root{
    // Sizes
    --header-height: 6rem;

    // Typography
    --fz-largest: 2.788rem;
    --fz-larger: 1.628rem;
    --fz-large: 1.34rem;
    --fz-normal: .93rem;
    --fz-small: 0.833rem;
    --fz-smaller: 0.694rem;
    --fz-smallest: 0.579rem;
    
    @media screen and (max-width: 768px) {
      --fz-largest: 2.2588rem;
      --fz-larger: 1.428rem;
      --fz-large: 1.14rem;
      --fz-normal: .73rem;
      --fz-small: 0.633rem;
      --fz-smaller: 0.594rem;
      --fz-smallest: 0.479rem;
    }

    // Z-index
    --z-1: 1
    --z-2: 2
    --z-3: 3
    --z-4: 999
  }

   // ==================== Reseting HTML  ==================== //
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 1px solid #fafafa;
  }
  body{
    background-color: #292d35;
  }
  body * {
    line-height: 1.6;
    color: #ffffff;
    transition: all.5s;
    font-family: 'Roboto Mono', monospace;
    -webkit-tap-highlight-color: transparent;
  }
  input{
    outline: none;
    border: none;
  }
  img{
    width: 100%;
    height: auto;
  }
  ul{
    list-style: none;
  }
  a{
    display: inline-block;
    text-decoration: none;
  }
`;

// Styled Components
export const PageContainer = styled.main`
	width: min(1440px, 80%);
	margin-inline: auto;
`;
