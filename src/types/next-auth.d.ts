/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
  }

  interface Session {
    user: {
      username: string;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string;
  }
} 