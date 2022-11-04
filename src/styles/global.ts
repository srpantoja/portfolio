import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    h1, h4 {
        color: #FFF;
        
    }

    html, body{
        height: 100%;
        scroll-behavior: smooth;
    }
    span {
        padding-top: 50px;
    }
    body {
        background: radial-gradient(circle at center, #201D47 , #17153A);
        font-family: 'Poppins', sans-serif;
    }

    button {
        background-color: none;
        border: none;
        outline: none;
    }

    a{
        text-decoration: none;
        outline: none;
    }
`

export default globalStyle
////linear-gradient(246.73deg, #3D3D3D 17.02%, #252525 98.79%);