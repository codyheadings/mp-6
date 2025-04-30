"use client";

import SignIn from "@/components/sign-in";
import styled from "styled-components";

const Heading = styled.h1`
    margin: 1vh auto;
    padding: 0 1rem;
`

export default function SignInButton() {

    return (
        <div>
            <Heading>Sign in to GitHub to view your data</Heading>
            <SignIn provider={"github"}/>
        </div>
    );
}