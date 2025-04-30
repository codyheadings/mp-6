"use client"

import styled from "styled-components";
import {ReactNode} from "react";

const StyledDiv = styled.div`
    margin: 1vh auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

export default function WrapperDiv({children}: {children: ReactNode}){
    return (<StyledDiv>
            {children}
        </StyledDiv>
    )
}