import styled from "styled-components"

export const Main = styled.div`

    padding-top: 100px;
    display:flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    h1 {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 25px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    > div {
        width: 50%;
    }
`

export const SkillContainer = styled.div`
    box-shadow: 0px 10px 15px 1px rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    margin: 10px;
    background: #FFF;
    > h4 {
        margin-top: 25px;
        margin-bottom: 25px;
        font-size: 20px;
        text-align: center;
    }

    h4 {
        color: #17153A;
    }
`