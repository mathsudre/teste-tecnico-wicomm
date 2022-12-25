import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'Aktiv Grotesk Ex';
        src: url('/fonts/Aktiv Grotesk Ex/Aktiv Grotesk Ex.ttf') format('truetype');        
    }


    :root{
    --bg-color:#E5E5E5;
    --white-1:#FFFFFF;
    --white-2:#F7F7F7;
    --orange:#F2994A;
    --blue-marine:#009BAA;
    --black:#000000;
    --rose:#FD6868;
    --red-1:#B90032;
    --gray-1:#333333;
    --gray-2: #BDBDBD;
    --gray-3:#F5F6FA;
    --gray-4:#828282;
    --gold:#AA8232;
    --bege:#D5B69A;    
    --bg-footer:#E1DCD5;
    --bg-color-2:#F8F8F8;
    --blue-hinode: #00002D; 
    --font-open: 'Open Sans', sans-serif;
    --font-oswald: 'Oswald', sans-serif;
    --font-playfair: 'Playfair Display', serif;
    --font-aktiv:'Aktiv Grotesk Ex', serif;
    --font-roboto:'Roboto', serif;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style-type: none;              
    }

    body{
        width: 1441px;        
        min-height: 100vh;       
        margin: 0 auto;
    }

    button{
        cursor: pointer;       
    } 

    a:-webkit-any-link {   
        text-decoration: none;
        color: var(--black);
    }    
   
`;
