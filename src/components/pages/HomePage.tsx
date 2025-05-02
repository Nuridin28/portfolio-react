import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server } from "lucide-react";
import ThreeJsHero from '../3d/ThreeJsHero';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const heroSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const scrollY = window.scrollY;
        heroSectionRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ThreeJsHero />
        </div>
        
        <div 
          ref={heroSectionRef}
          className="container flex flex-col items-center justify-center min-h-[90vh] py-24 text-center md:px-8 px-4"
        >
          <p className="inline-block text-sm font-medium bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4 animate-fade-in">
            Full Stack Developer
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-up">
            Building exceptional digital <span className="text-primary">experiences</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-[700px] mb-8 animate-fade-up delay-150">
            I craft modern, responsive web applications with cutting-edge technologies
            and a focus on user experience and performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button 
              onClick={() => navigate('/projects')} 
              className="rounded-full"
              size="lg"
            >
              View my work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => navigate('/contact')} 
              variant="outline" 
              className="rounded-full"
              size="lg"
            >
              Contact me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block md:px-8 px-4">
          <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-scroll-down"></div>
          </div>
        </div>
      </section>
      
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What I <span className="text-primary">Do</span>
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Specializing in building modern web applications with a focus on user experience,
              performance, and maintainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="bg-card rounded-lg p-8 shadow-sm transition-all hover:shadow-md flex flex-col">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
              <p className="text-muted-foreground mb-6">
                Creating responsive, accessible, and performant user interfaces using modern
                JavaScript frameworks and libraries.
              </p>
              <Button 
                variant="ghost" 
                className="mt-auto self-start"
                onClick={() => navigate('/skills')}
              >
                Frontend Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-sm transition-all hover:shadow-md flex flex-col">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Server className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-muted-foreground mb-6">
                Building robust, scalable, and secure server-side applications and APIs
                using modern frameworks and databases.
              </p>
              <Button 
                variant="ghost" 
                className="mt-auto self-start"
                onClick={() => navigate('/skills')}
              >
                Backend Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gradient-to-r from-primary/5 to-primary/10 md:px-8 px-4">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
            Let's collaborate to build something amazing together. I'm always open to new
            projects and challenges.
          </p>
          <Button 
            onClick={() => navigate('/contact')} 
            className="rounded-full"
            size="lg"
          >
            Get in touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}