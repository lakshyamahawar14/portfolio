import "./globals.css";

export const metadata = {
  title: "Lakshya Mahawar's Portfolio",
  description:
    "Portfolio for Lakshya Mahawar. This portfolio website is made using NextJS 13 framework, which is a full stack web developemnt framework. This is a personal website to display the information, skills, projects related to Lakshya Mahawar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
