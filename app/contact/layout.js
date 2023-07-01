import "../globals.css";

export const metadata = {
  title: "Contact Me",
  description: "Contact Page for Lakshya Mahawar's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
