"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {

    return (
        <div>
            <h1>Sign in to view your data</h1>
            <button onClick={async () => {
                await signIn("github");
            }}>Sign in with GitHub</button>
        </div>
    );
}