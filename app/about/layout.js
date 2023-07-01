import "../globals.css";

export const metadata = {
  title: "About Me",
  description: "About Page for Lakshya Mahawar's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
