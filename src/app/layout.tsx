"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scrollY, setScrollY] = useState<any>(0);
  const [sticky, setSticky] = useState<boolean>(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, [scrollY]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={`sticky top-0 z-50 flex flex-col justify-center items-center w-full bg-white ${
            scrollY ? "shadow-md" : ""
          }`}
        >
          <div className="flex items-center h-24 md:h-14 lg:h-14 mt-6">
            <img
              src="/images/lawyer.png"
              alt="Logo"
              className="w-12 h-12 mr-4"
            />
            <h1 className="text-center font-serif text-4xl">
              Advocate Kumar Laksya & Associates
            </h1>
          </div>
          <div className="w-full md:w-[1000px] lg:w-[1000px] h-[1px] bg-black mb-4"></div>
          <nav className="w-full md:w-[550px] lg:w-[550px] h-10">
            <ul className="p-3 flex justify-between font-serif font-thin cursor-pointer">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="services">Our Services</Link>
              </li>
              {/* <li>News & Updates</li> */}
              <li>
                <Link href="contact">Contact</Link>
              </li>
              <li>
                <Link href="team">Our Team</Link>
              </li>
              <li>
                <Link href="about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
        <p className="text-sm font-serif font-thin text-center p-10">
          ©2023 by Advocate Kumar Lakshay & Associates.
        </p>
      </body>
    </html>
  );
}
