"use client"
import {auth} from "@/auth";
import SignInButton from "@/components/sign-in-button";
import Image from "next/image";
import styled from "styled-components";

const PicError = styled.p`
    color: red;
`

const StyledImage = styled(Image)`
    border-radius: 50%;
    margin: 10px;
`

export default async function Home() {
  const session = await auth()

  return (
    <main>
        <div>
            {session ? (
                <div>
                    <h1>Welcome!</h1>
                    <h3>User Name: {session.user?.name || "Not Found"}</h3>
                    {session.user?.image ? (
                        <StyledImage
                            src={session.user.image}
                            alt={`Profile image for ${session.user?.name}`}
                            width={100}
                            height={100}
                        />
                    ):<PicError>No profile picture found.</PicError>}
                    <p>You are signed in with {session.user?.email}.</p>
                </div>
            ) : (
                <div>
                    <h1>Sign in to view your data:</h1>
                    <SignInButton/>
                </div>
            )}
        </div>
    </main>
  );
}
