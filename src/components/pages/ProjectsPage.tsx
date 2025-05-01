import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData, categories } from "@/data/projects-data";
import ProjectCard from "../ui/project-card";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(activeCategory));

  return (
    <div className="container py-16 md:px-8 px-4">
      <div className="space-y-16">
        <section>
          <div className="flex flex-col gap-4">
            <Badge variant="outline" className="w-fit">My Projects</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              Selected Work
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore some of my recent projects and see my skills in action.
            </p>
          </div>
        </section>
        
        <section>
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}