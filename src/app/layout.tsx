import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LogSnagProvider } from "@logsnag/next";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import { env } from "@/env";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elijah Posnikov - Software Developer",
  description: "Portfolio for Elijah Posnikov",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <LogSnagProvider
          token={env.NEXT_PUBLIC_LOGSNAG_TOKEN}
          project={env.NEXT_PUBLIC_LOGSNAG_PROJECT}
        />
      </head>
      <body
        className={cn(inter.className, GeistSans.variable, GeistMono.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
