'use client';

import Link from "next/link";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const { isLoggedIn, username, logout } = useAuth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl font-bold">Welcome to Udoit 2</h1>
        
        {isLoggedIn ? (
          <>
            <p className="text-xl text-center">Welcome back, {username}!</p>
            <button
              onClick={logout}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-500 text-white gap-2 hover:bg-red-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="text-xl text-center">Your gateway to global information</p>
            <div className="flex gap-4 items-center">
              <Link
                href="/login"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Login
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
