import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dolphin Stationery",
  description: "All Kinds of office stationery and General orders supplier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <main className="p-2 w-full max-w-screen-2xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
