import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'Aktiv Grotesk Ex';
        src: url('/fonts/Aktiv Grotesk Ex/Aktiv Grotesk Ex.ttf') format('truetype');        
    }


    :root{
         /*COLORS*/
    --bege:#D5B69A;    
    --bg-color:#E5E5E5;
    --bg-color-2:#F8F8F8;
    --bg-footer:#E1DCD5;
    --black:#000000;
    --blue-hinode: #00002D; 
    --blue-marine:#009BAA;
    --gold:#AA8232;
    --gray-1:#333333;
    --gray-2: #BDBDBD;
    --gray-3:#F5F6FA;
    --gray-4:#828282;
    --orange:#F2994A;
    --red-1:#B90032;
    --rose:#FD6868;
    --white-1:#FFFFFF;
    --white-2:#F7F7F7;
    
        /*FONTS*/
    --font-aktiv:'Aktiv Grotesk Ex', serif;
    --font-open: 'Open Sans', sans-serif;
    --font-oswald: 'Oswald', sans-serif;
    --font-playfair: 'Playfair Display', serif;
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
