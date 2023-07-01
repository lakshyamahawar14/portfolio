import "../globals.css";

export const metadata = {
  title: "My Skills",
  description: "Expected Skill Level of Lakshya Mahawar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
