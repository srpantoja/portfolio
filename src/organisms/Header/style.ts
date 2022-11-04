import styled from 'styled-components'

export const Box = styled.header`
    position: fixed;
    padding: 15px 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    background: #17153A;
    border-bottom: 1px solid #FFF;
    > div{
        display: flex;
    }
`