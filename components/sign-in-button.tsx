"use client";

import SignIn from "@/components/sign-in";

export default function SignInButton() {

    return (
        <div>
            <h1>Sign in to GitHub to view your data</h1>
            <SignIn provider={"github"}/>
        </div>
    );
}