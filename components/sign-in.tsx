import {signIn} from "next-auth/react";

export default function SignIn({provider, ...props}: { provider?: string }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                signIn(provider)
                    .then((result) => {
                    console.log("Sign in result:", result)})
                    .catch((error) => {
                        console.error("Sign in error:", error)});
            }}
            >
            <button type="submit" {...props}>Sign in</button>
        </form>
    )
}