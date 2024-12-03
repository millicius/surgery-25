import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Drw.work",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen">
        <header className="w-full flex justify-between items-center px-5 py-2">
          <div className="flex gap-5 items-center">
            <h1 className="font-bold">Drw.work</h1>
            <nav className="flex gap-2">
              <Link href='/'>home</Link>
              <SignedIn>
                <Link href='/alus'>alus</Link>
              </SignedIn>
            </nav>
          </div>
            <div>
            <SignedOut>
              <SignInButton>
                <button className="bg-slate-950 text-white py-1 px-3 rounded-md text-sm tracking-wider">Sign in</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
          </header>
          <div>
        {children}
        </div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}