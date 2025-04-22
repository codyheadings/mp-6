"use client"

import {signIn} from "next-auth/react";

export default async function SignIn({provider, ...props}: { provider?: string }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                signIn(provider);
            }}
            >
            <button type="submit" {...props}>Sign In</button>
        </form>
    )
}