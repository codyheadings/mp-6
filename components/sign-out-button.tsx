"use client";

import SignOut from "@/components/sign-out";
import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 15px 0
`

export default function SignOutButton() {

    return (
        <StyledDiv>
            <SignOut/>
        </StyledDiv>
    );
}