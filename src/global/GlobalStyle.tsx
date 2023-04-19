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
    --fz-largest: 2.488rem;
    --fz-larger: 1.628rem;
    --fz-large: 1.34rem;
    --fz-normal: .93rem;
    --fz-small: 0.833rem;
    --fz-smaller: 0.694rem;
    --fz-smallest: 0.579rem;
    
    @media screen and (max-width: 768px) {
      --fz-largest: 1.988rem;
      --fz-larger: 1.428rem;
      --fz-large: 1.14rem;
      --fz-normal: .73rem;
      --fz-small: 0.633rem;
      --fz-smaller: 0.594rem;
      --fz-smallest: 0.479rem;
    }
  }

   // ==================== Reseting HTML  ==================== //
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto Mono', monospace;
    background-color: #292d35;
    line-height: 1.6;
    color: #ffffff;
  }
  input{
    outline: none;
    border: none;
  }
  a{
    display: inline-block;
    text-decoration: none;
  }
`;

export const PageContainer = styled.main`
	width: min(1440px, 80%);
	margin-inline: auto;
`;
