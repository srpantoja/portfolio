import styled from 'styled-components'

export const ContainerHome = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    padding-top: 30px;
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
        font-size: 22px;
        font-weight: normal;
    }
`

export const ColumnImage = styled.div`

    padding-left: 100px;
    position: relative;
    
    > img {
        display: block; 
        margin: auto;
        border-radius: 50px;
        width: 300px;
        height: 400px;
        object-fit: cover;
        box-shadow: 0px 10px 15px 10px rgba(0, 0, 0, 0.25);

    }
`