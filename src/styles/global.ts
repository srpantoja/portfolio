import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    h1, h4 {
        color: #EEE9DB;
    }

    html, body{
        height: 100%;
    }

    body {
        background: #3D3D3D;
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