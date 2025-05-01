import { Project } from "@/types";

export const categories = [
  { label: "Web Apps", value: "webapp" },
  { label: "Mobile", value: "mobile" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Dashboard", value: "dashboard" },
];

export const projectsData: Project[] = [
  // {
  //   id: 1,
  //   title: "E-Commerce Platform",
  //   description: "A full-featured e-commerce platform with product management, cart, and checkout.",
  //   image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   year: "2023",
  //   techs: ["React", "Next.js", "Node.js", "MongoDB"],
  //   categories: ["webapp", "ecommerce"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // },
  {
    id: 2,
    title: "Food ordering app in university",
    description: "a food ordering app in university",
    image: "/assetss/ucafe.png",
    year: "2023",
    techs: ["Nextjs", "TypeScript", "NextAPI", "MongoDB"],
    categories: ["admin panel", "dashboard", "webapp"],
    githubUrl: "https://github.com/Nuridin28/ucafe_next",
    liveUrl: "https://ucafe-next.vercel.app/"
  },
];