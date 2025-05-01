import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-8 px-4">
      <div className="container py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold">Nuridin<span className="text-primary">Portfolio</span></h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer specializing in modern web technologies and solutions.
            </p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <Button variant="link" onClick={() => navigate('/home')} className="p-0 h-auto justify-start text-muted-foreground">Home</Button>
            <Button variant="link" onClick={() => navigate('/about')} className="p-0 h-auto justify-start text-muted-foreground">About</Button>
            <Button variant="link" onClick={() => navigate('/skills')} className="p-0 h-auto justify-start text-muted-foreground">Skills</Button>
            <Button variant="link" onClick={() => navigate('/projects')} className="p-0 h-auto justify-start text-muted-foreground">Projects</Button>
            <Button variant="link" onClick={() => navigate('/contact')} className="p-0 h-auto justify-start text-muted-foreground">Contact</Button>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="flex space-x-3">
              <a href="https://github.com/Nuridin28" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/nnuridin/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-muted-foreground text-sm">Feel free to reach out if you have any questions or want to work together.</p>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Get in touch
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Nuridin Nurman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}