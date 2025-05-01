import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SkillIcon from "../ui/skill-icon";
import { skillsData } from "@/data/skills-data";

export default function SkillsPage() {
  return (
    <div className="container py-16 md:px-8 px-4">
      <div className="space-y-16">
        <section>
          <div className="flex flex-col gap-4">
            <Badge variant="outline" className="w-fit">Technical Skills</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              My Professional Expertise
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Frontend Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.frontend.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
                icon={skill.icon}
                experience={skill.experience}
              />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Backend Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.backend.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
                icon={skill.icon}
                experience={skill.experience}
              />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Databases & Data Storage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.databases.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
                icon={skill.icon}
                experience={skill.experience}
              />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">DevOps & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.devops.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
                icon={skill.icon}
                experience={skill.experience}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

interface SkillCardProps {
  name: string;
  proficiency: number;
  icon: string;
  experience: string;
}

function SkillCard({ name, proficiency, icon, experience }: SkillCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 rounded-full p-2">
              <SkillIcon name={icon} className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold">{name}</h3>
          </div>
          <Badge variant="outline">{experience}</Badge>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Proficiency</span>
            <span>{proficiency}%</span>
          </div>
          <Progress value={proficiency} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}