import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Dolphin Stationery",
  description: "All Kinds of office stationery and General orders supplier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
