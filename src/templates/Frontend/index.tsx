import React from 'react'
import Header from '../../organisms/Header';
import * as FStyle from "./styles"
type FrontendProps = {
    children: React.ReactNode;
}

const Frontend = ({ children }: FrontendProps) => {
    return (
        <FStyle.Container>
            <Header />
            <main>{children}</main>
        </FStyle.Container>
    )
}

export default Frontend