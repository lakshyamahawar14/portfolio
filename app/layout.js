"use client";
import { RecoilRoot } from "recoil";
import "./globals.css";

// export const metadata = {
//   title: "Lakshya Mahawar's Portfolio",
//   description: "Portfolio for Lakshya Mahawar",
// };

export default function RootLayout({ children }) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RecoilRoot>
  );
}
