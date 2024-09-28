import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/context/theme";
import { Header } from "@/components";
import { ToastContainer } from "react-toastify";

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

const harryPotter = localFont({
  src: "./fonts/HarryPotter-ov4z.ttf",
  variable: "--font-hp",
  weight: "100 200 300 400 500",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harry Potter Mischief Managed App",
  description: "A Harry Potter themed application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${harryPotter.variable} antialiased flex flex-col h-full`}
      >
        <ThemeProvider>
          <ToastContainer />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
