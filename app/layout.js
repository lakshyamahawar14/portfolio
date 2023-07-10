import "./globals.css";

export const metadata = {
  title: "Lakshya Mahawar's Portfolio",
  description:
    "Portfolio for Lakshya Mahawar. This portfolio website is made using NextJS 13 framework, incorporating Javascript and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
