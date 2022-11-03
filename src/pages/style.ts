import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        width: 50%;
        > div {
            padding-top:50px
        }
    }

    h1 {
        font-size: 78px;
        font-weight: bold;
    }

    h4 {
        font-size: 26px;
        font-weight: normal;
    }
`

export const ColumnImage = styled.div`

    padding-left: 125px;
    position: relative;

    img {
        display: block; 
        margin: auto;
        border-radius: 50px;
        width: 400px;
        height: 400px;
    }

    iframe {
        display: block; 
        margin: auto;
        border: none;
    }
`

export const ContainerAboutUS = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    > div{ 
        width: 75%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h1 {
        font-size: 58px;
        font-weight: bold;
    }

    h4 {
        font-size: 20px;
        font-weight: normal;
        text-align: justify;
        text-justify: inter-word;
        text-indent: 50px;
    }
`