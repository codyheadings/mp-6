import {auth} from "@/auth";
import SignInButton from "@/components/sign-in-button";
import Image from "next/image";
import SignOutButton from "@/components/sign-out-button";
import Welcome from "@/components/welcome";
import WrapperDiv from "@/components/wrapper-div";

export default async function Home() {
  const session = await auth()

  return (
    <main>
        <WrapperDiv>
            {session ? (
                <WrapperDiv>
                    <Welcome/>
                    <WrapperDiv>
                        <h3>User Name: {session.user?.name || "Not Found"}</h3>
                        {session.user?.image ? (
                            <Image
                                src={session.user.image}
                                alt={`Profile image for ${session.user?.name}`}
                                width={100}
                                height={100}
                            />
                        ):<p>No profile picture found.</p>}
                        <p>You are signed in with {session.user?.email}.</p>
                        <SignOutButton/>
                    </WrapperDiv>
                </WrapperDiv>
            ) : (
                <div>
                    <SignInButton/>
                </div>
            )}
        </WrapperDiv>
    </main>
  );
}
