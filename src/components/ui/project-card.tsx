import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div 
        className="h-48 overflow-hidden border-b" 
        style={{ 
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-background"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button 
                size="sm" 
                variant="outline"
                className="bg-background"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          {project.title}
          <Badge>{project.year}</Badge>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          {project.techs.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="ghost" className="text-sm" asChild>
          <a href={project.liveUrl || project.githubUrl || "#"} target="_blank" rel="noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Details
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}