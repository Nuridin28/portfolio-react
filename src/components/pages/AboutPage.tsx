import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Code2, Globe, Laptop, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-16 md:px-8 px-4">
      <div className="space-y-16">
        <section>
          <div className="flex flex-col gap-4">
            <Badge variant="outline" className="w-fit">About Me</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              Full Stack Developer with a passion for building impactful solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Combining technical expertise with creative problem-solving to craft exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg">
                I'm a full stack developer with a strong foundation in both frontend and backend technologies. 
                My journey in software development began with a curiosity about how things work behind the scenes,
                which eventually led me to pursue a career in web development.
              </p>
              <p>
                Over the years, I've honed my skills in various programming languages and frameworks, allowing me
                to build comprehensive solutions from concept to deployment. I'm passionate about creating clean,
                efficient, and maintainable code that solves real-world problems.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest industry trends and best practices.
                This mindset has enabled me to adapt to new technologies quickly and incorporate them into my projects
                effectively.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                    <Code2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium block">1 year</span>
                    <span className="text-sm text-muted-foreground">Professional experience</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium block">10+ projects</span>
                    <span className="text-sm text-muted-foreground">Completed successfully</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                    <Laptop className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium block">Full Stack</span>
                    <span className="text-sm text-muted-foreground">Development expertise</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium block">Continuous learner</span>
                    <span className="text-sm text-muted-foreground">Always expanding knowledge</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex flex-col gap-4 mb-12">
            <Badge variant="outline" className="w-fit">My Journey</Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              A timeline of my professional growth and key milestones.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                <h3 className="font-bold text-xl">Frontend Developer</h3>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>December 2024 - Present</span>
                </div>
              </div>
              <h4 className="text-primary font-medium mb-4">
                <a href="https://almavalley.kz/" target="_blank" rel="noreferrer">Alma Valley</a>
              </h4>
              <p className="mb-4">
              Developed and optimized university web applications, including an online testing system, appeals submission, and grading system
Improved performance with lazy loading, code splitting, and caching strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Shadcn UI</Badge>
              </div>
            </div>
            
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                <h3 className="font-bold text-xl">Full Stack Developer course participant</h3>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>November 2024 - April 2025</span>
                </div>
              </div>
              <h4 className="text-primary font-medium mb-4">
                <a href="https://www.nfactorial.school/" target="_blank" rel="noreferrer">Nfactorial</a>
              </h4>
              <p className="mb-4">
                Developed and maintained multiple client projects, collaborated with cross-functional
                teams, and implemented modern frontend and backend solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Nodejs</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex flex-col gap-4 mb-12">
            <Badge variant="outline" className="w-fit">Philosophy</Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              My Approach to Development
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide my work and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">User-Centered Design</h3>
              <p className="text-muted-foreground">
                I believe in putting users first. Every line of code I write aims to enhance the user experience
                and solve real problems.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Clean, Maintainable Code</h3>
              <p className="text-muted-foreground">
                I strive to write code that's not just functional, but also readable, maintainable, and scalable
                for future development.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Laptop className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly. I embrace continuous learning to stay current with the latest tools
                and best practices.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}