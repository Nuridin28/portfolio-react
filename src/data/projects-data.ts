import { Project } from "@/types";

export const categories = [
  { label: "Web Apps", value: "webapp" },
  { label: "Mobile", value: "mobile" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Dashboard", value: "dashboard" },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Fake Store",
    description: "A fake store with products, categories, and a cart.",
    image: "/assets/face-store.png",
    year: "2025",
    techs: ["React", "Tailwind CSS", "TypeScript"],
    categories: ["webapp", "ecommerce"],
    githubUrl: "https://github.com/Nuridin28/fake-store",
    liveUrl: "https://fake-store-phi-pearl.vercel.app/products"
  },
  {
    id: 2,
    title: "Food ordering app in university",
    description: "a food ordering app in university",
    image: "/assets/ucafe.png",
    year: "2024",
    techs: ["Nextjs", "TypeScript", "NextAPI", "MongoDB"],
    categories: ["admin panel", "dashboard", "webapp"],
    githubUrl: "https://github.com/Nuridin28/ucafe_next",
    liveUrl: "https://ucafe-next.vercel.app/"
  },
  {
    id: 3,
    title: "Coffee Parfait Bar",
    description: "a coffee parfait bar with products, categories, and a cart.",
    image: "/assets/parfait.png",
    year: "2024",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    categories: ["webapp", "ecommerce"],
    githubUrl: "https://github.com/Nuridin28/Coffee-Parfait-bar",
    liveUrl: "https://coffee-parfait-bar.vercel.app/"
  },
];