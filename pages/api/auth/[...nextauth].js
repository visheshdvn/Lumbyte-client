import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "../../../middleware/auth/encryptDecryptPassword";

import { PrismaClient } from "@prisma/client";
const { user } = new PrismaClient();

const secret = process.env.TOKEN_SECRET;

export default NextAuth({
  // Configure one or more authentication providers
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  secret: secret,
  jwt: {
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      // credentials: {
      //   email: {
      //     label: "Email",
      //     type: "email",
      //     placeholder: "abc@example.com",
      //   },
      //   password: { label: "Password", type: "password" },
      // },
      authorize: async (credentials, req) => {
        console.log("credentials", credentials);
        var user_found = await user.findUnique({
          where: {
            email: credentials.login,
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
          return null;
        }

        const match = await comparePassword(
          credentials.password,
          user_found.account.password
        );

        if (!match) {
          return null;
        }

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
