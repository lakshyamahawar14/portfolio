import "../globals.css";

export const metadata = {
  title: "My Projects",
  description:
    "Projects made by Lakshya Mahawar. This portfolio website is made using NextJS 13 framework, which is a full stack web developemnt framework and is a successor to React framework. This is a personal website to display the resume, skills, projects of Lakshya Mahawar. This website have links like About Me, My Projects, My Skills, Contact Me. The website us fully responsive because Tailwind CSS is used.",
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
