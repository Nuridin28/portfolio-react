import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  toggleMobileMenu: () => void;
}

export default function Navbar({ toggleMobileMenu }: NavbarProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPage = location.pathname.slice(1) || '';
  
  const navItems = [
    { label: t('header.home'), value: "" },
    { label: t('header.about'), value: "about" },
    { label: t('header.projects'), value: "projects" },
    { label: t('Skills'), value: "skills" },
    { label: t('header.contact'), value: "contact" }
  ];

  return (
    <header className="sticky  md:px-8 px-4 top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-primary">Nuridin</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 select-none">
          {navItems.map((item) => (
            <Link
              key={item.value}
              to={`/${item.value}`}
              className={cn(
                "text-sm font-medium transition-colors",
                currentPage === item.value 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}