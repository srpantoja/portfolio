import styled from 'styled-components'

export const ContainerAboutUS = styled.div`
    padding-top: 100px;
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
        font-size: 48px;
        font-weight: bold;
    }

    h4 {
        margin-top: 50px;
        font-size: 20px;
        font-weight: normal;
        text-align: justify;
        text-justify: inter-word;
        text-indent: 50px;
    }
`