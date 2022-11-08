import styled from 'styled-components'

export const Container = styled.div`
    padding-top: 100px;
    height: 200vh;
    display: flex;
    flex-direction: column;

    h1 {
        text-align: center;
        font-size: 48px;
        font-weight: bold;
    }
    
    h2 {
        margin-top: 25px;
        margin-left: 45px;
    }
`

export const ExperienceContainer = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h5, h6, ul {
        font-weight: normal;
    }

`

export const ExperienceBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;
    
`

export const TimeLine = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`

export const ExperienceText = styled.div`
    width: 100%;
    padding: 25px;
    box-shadow: 0px 10px 15px 1px rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    background: #FFF;

    
    h4, h5, h6, ul {
        color: #17153A;
    }

    ul {
        margin-left: 75px;
        font-size: 14px;
    }

    h5 {
        font-size: 20px;
    }

    h6 {
        margin-left: 50px;
        font-size: 16px;
    }

`

export const Dot = styled.div.attrs((props: {mg: string}) => props)`
    margin-top: ${props => props.mg ? "20px" : "0px"};
    background-color: #FFF;
    border: 5px solid #FFF;
    border-radius: 500px;
    width: 25px;
    height: 25px;
`

export const Divider = styled.div.attrs((props: {isLast: boolean}) => props)`

    width: 2px;
    background-color: #FFF;
    height: ${props => props.isLast ? "75%" : "90%"};
    margin-top: 20px;
    border: 1px solid #FFF; 
    border-radius: 5px;
`
