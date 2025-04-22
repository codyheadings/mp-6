import GitHub from "@auth/core/providers/github";
import NextAuth from "next-auth";

export const {handlers, auth}=NextAuth(
    {
        providers: [GitHub],
    }
)