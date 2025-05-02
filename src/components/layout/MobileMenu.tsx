import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  currentPage: string;
  toggleMobileMenu: () => void;
}

export default function MobileMenu({ isOpen, currentPage, toggleMobileMenu }: MobileMenuProps) {
  const navigate = useNavigate();
  const navItems = [
    { label: "Home", value: "" },
    { label: "About", value: "about" },
    { label: "Skills", value: "skills" },
    { label: "Projects", value: "projects" },
    { label: "Contact", value: "contact" }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
      <nav className="fixed top-16 inset-x-0 bg-background p-6 border-b border-border/40 shadow-lg z-50 flex flex-col items-center space-y-4 animate-in slide-in-from-top-5">
        {navItems.map((item) => (
          <Button
            key={item.value}
            variant="ghost"
            onClick={() => {
              navigate(`/${item.value}`)
              toggleMobileMenu()
            }}
            className={cn(
              "w-full justify-center text-base font-medium transition-colors",
              currentPage === item.value 
                ? "text-foreground bg-secondary" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
}