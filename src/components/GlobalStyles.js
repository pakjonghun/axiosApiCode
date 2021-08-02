import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset}

a{
    text-decoration:none;
    color:indianred;
}


*{
    box-sizing: border-box;
}

body{
    padding:1rem;
    padding-top: 5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
}
`;

export default globalStyles;
