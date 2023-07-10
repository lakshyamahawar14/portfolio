import "../globals.css";

export const metadata = {
  title: "My Projects",
  description:
    "Projects made by Lakshya Mahawar. This portfolio website is made using NextJS 13 framework, which is a full stack web developemnt framework. This is a personal website to display the information, skills, projects related to Lakshya Mahawar.",
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
