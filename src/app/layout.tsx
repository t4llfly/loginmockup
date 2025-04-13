import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/sonner";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
      default: "Login mockup",
      template: "%s | Login mockup",
  },
  description: "made by tallfly.ru",

};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className={`${openSans.variable} antialiased`} lang="en" suppressHydrationWarning>
    <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster closeButton/>
        </ThemeProvider>
      </body>
    </html>
  );
}
