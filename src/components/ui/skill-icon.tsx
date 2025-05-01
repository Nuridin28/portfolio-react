import { 
  Database, 
  LayoutGrid, 
  Server, 
  Cpu, 
  Globe, 
  Code2, 
  GitBranch, 
  Container, 
  CircuitBoard,
  FileCode,
  MessageSquare
} from "lucide-react";

interface SkillIconProps {
  name: string;
  className?: string;
}

export default function SkillIcon({ name, className }: SkillIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    // Frontend
    react: <Code2 className={className} />,
    nextjs: <LayoutGrid className={className} />,
    javascript: <FileCode className={className} />,
    typescript: <FileCode className={className} />,
    tailwind: <Globe className={className} />,
    angular: <Code2 className={className} />,
    
    // Backend
    nodejs: <Server className={className} />,
    django: <Server className={className} />,
    fastapi: <Server className={className} />,
    
    // Databases
    mongodb: <Database className={className} />,
    postgresql: <Database className={className} />,
    
    // DevOps & Tools
    git: <GitBranch className={className} />,
    docker: <Container className={className} />,
    aws: <CircuitBoard className={className} />,
    graphql: <MessageSquare className={className} />,
    
    // Default
    default: <Cpu className={className} />
  };
  
  return iconMap[name.toLowerCase()] || iconMap.default;
}