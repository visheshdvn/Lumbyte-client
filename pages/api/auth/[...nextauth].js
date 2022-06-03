import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "../../../middleware/auth/encryptDecryptPassword";
import prisma from "../../../lib/prisma";
const { user } = prisma;

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
      authorize: async (credentials, req) => {
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
            roles: true,
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
          roles: user_found.roles,
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
        token.roles = user.roles;
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
        roles: token.roles,
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
