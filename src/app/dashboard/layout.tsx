import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider"
import Header from "@/components/layout/header";
import { checkAuth } from "@/server/auth/utils";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Study Material",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await checkAuth()
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.className, "bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="pb-12">
            <Header />
          </div>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
