import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "GharShikshaNepal",
    template: "%s | Suresh Shah",
  },
  description: "Welcome to gharshikshanepal.com",
  keywords: [
    "GharShikshaNepal",
    "GharShiksha",
    "GharShikshaNepal.com",
    "Home Tution Nepal",
    "Home Tution in Nepal",
    "Home Tution Classes in Nepal",
    "Home Tution Classes in Kathmandu",
    "Home Tution",
  ],
  icons: {
    icon: "logo.jpg",
  },
  authors: [
    { name: "Suresh Shah" },
    { name: "Suresh", url: "https://sureshsah.com.np" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
