import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-center gap-8 py-6">
      <Button 
        variant="ghost" 
        className="text-foreground hover:text-primary hover:bg-muted transition-smooth"
      >
        Home
      </Button>
      <Button 
        variant="ghost" 
        className="text-foreground hover:text-primary hover:bg-muted transition-smooth"
      >
        About
      </Button>
      <Button 
        variant="ghost" 
        className="text-foreground hover:text-primary hover:bg-muted transition-smooth"
      >
        Contact
      </Button>
    </nav>
  );
};

export default Navigation;