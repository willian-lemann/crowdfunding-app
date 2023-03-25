"use client";

import "@/styles/globals.css";

import { Epilogue } from "@next/font/google";
import { Sidebar } from "@/app/(home)/components/Sidebar";
import { Navbar } from "@/app/(home)/components/Navbar";
import { CampaignProvider } from "@/context";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={epilogue.className}>
      <body className="relative md:-8 p-4 bg-primary min-h-screen flex flex-row">
        <ThirdwebProvider activeChain={ChainId.Goerli}>
          <CampaignProvider>
            <Sidebar />

            <div className="flex-1 max-md:w-full max-w-[1280px] mx-auto md:pr-5">
              <Navbar />
              {children}
            </div>
          </CampaignProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
