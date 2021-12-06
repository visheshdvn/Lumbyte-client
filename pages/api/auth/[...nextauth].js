import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaClient } from "@prisma/client";
const { user, account, adminAccount } = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  secret: "Heg8jcjIaznHZPwFhYPznzwkR8CcDkqlyMNEQ0w/mQE=",
  jwt: {
    secret: "d9d8df00bdd183a320aa947e8a70e2a693d695e4588838338aa126dc43ad9c53",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      authorize: async(credentials, req) => {
        console.log("hi");
        // console.log(credentials.login);
        // console.log(credentials.password);
        var user_found = await user.findMany({
          where: {
            email: credentials.login,
          },
          select: {
            firstname: true,
            lastname: true,
            role: true,
          },
        });
        console.log("user", user_found);
        return {
          username: "visheshdvn",
          email: "vishesh56@gmail.com",
          image: "uifytjx",
          role: "admin",
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      // console.log("token", token);
      // console.log("user", user);
      if (user) {
        token.email = user.email;
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    session: async ({ session, token }) => {
      // console.log("----inide session----");
      session.user = {
        ...session.user,
        username: token.username,
        role: token.role,
      };
      // console.log("session", session);
      return session;
    },
  },
});
