import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daali Vardhan",
  description: "Personal website of a software engineer",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} max-w-full max-h-full min-w-80`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed hidden md:block -top-[50%] left-2/4 min-w-96 min-h-96 rounded-full blur-3xl opacity-90 bg-gradient-to-r  to-fuchsia-500 from-cyan-500"></div>
          <div className="fixed hidden md:block -top-[50%] left-[40%] min-w-96 min-h-96 rounded-full blur-3xl opacity-90 bg-gradient-to-r  to-fuchsia-500 from-cyan-500"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
