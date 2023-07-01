import "../globals.css";

export const metadata = {
  title: "My Projects",
  description: "Projects made by Lakshya Mahawar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
