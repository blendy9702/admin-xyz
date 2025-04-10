import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Two Guys",
  description: "Two Guys",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <div className="m-auto w-full bg-[#f5f5f5]">
          <Sidebar />
          <div className="flex flex-col lg:ml-[200px]">
            <Header />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
