import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "../../../middleware/auth/encryptDecryptPassword";

import { PrismaClient } from "@prisma/client";
const { user, account, adminAccount } = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  // pages: {
  //   signIn: "/auth/signin",
  // },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  secret: "Heg8jcjIaznHZPwFhYPznzwkR8CcDkqlyMNEQ0w/mQE=",
  jwt: {
    secret: "d9d8df00bdd183a320aa947e8a70e2a693d695e4588838338aa126dc43ad9c53",
  },
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "abc@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        var user_found = await user.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            username: true,
            role: true,
            dp: true,
            dpalt: true,
            account: {
              select: {
                password: true,
              },
            },
          },
        });

        if (!user_found) {
          console.log("User not found");
          return null;
        }

        console.log("user", user_found);
        const match = await comparePassword(
          credentials.password,
          user_found.account.password
        );
        console.log("match", match);

        return {
          id: user_found.id,
          firstname: user_found.firstname,
          lastname: user_found.lastname,
          username: user_found.username,
          email: user_found.email,
          role: user_found.role,
          dp: user_found.dp,
          dpalt: user_found.dpalt,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
        token.role = user.role;
        token.username = user.username;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
        token.dp = user.dp;
        token.dpalt = user.dpalt;
      }
      return token;
    },
    session: async ({ session, token }) => {
      // console.log("----inide session----");
      session.user = {
        id: token.userId,
        email: token.email,
        role: token.role,
        username: token.username,
        firstname: token.firstname,
        lastname: token.lastname,
        dp: token.dp,
        dpalt: token.dpalt,
      };
      return session;
    },
  },
});
