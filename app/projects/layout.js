import "../globals.css";

export const metadata = {
  title: "My Projects",
  description:
    "Projects made by Lakshya Mahawar. This portfolio website is made using NextJS 13 framework, incorporating Javascript and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
