import "./globals.css";

export const metadata = {
  title: "Lakshya Mahawar's Portfolio",
  description: "Portfolio for Lakshya Mahawar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
