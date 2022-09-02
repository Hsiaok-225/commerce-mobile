import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    
    body{
        font-size: 18px;
    }
    a {
        color:black;
        text-decoration: none;
    }
    
    li{
        list-style: none;
    }
`;

export default GlobalStyles;
