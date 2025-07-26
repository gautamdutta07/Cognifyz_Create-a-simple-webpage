import Navigation from "@/components/Navigation";
import SimpleForm from "@/components/SimpleForm";
import learningHero from "@/assets/learning-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation Menu */}
      <Navigation />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Hero Section with Heading, Paragraph, and Image */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Level 1 HTML/CSS Tasks
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Welcome to your HTML and CSS learning journey! This page demonstrates the three core tasks: 
              a beautiful webpage layout, an interactive form, and a modern navigation menu.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center">
            <img 
              src={learningHero} 
              alt="Learning illustration with person and laptop"
              className="rounded-lg shadow-soft max-w-2xl w-full h-auto"
            />
          </div>
        </section>

        {/* Form Section */}
        <section className="flex justify-center">
          <SimpleForm />
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground">
            Built with modern HTML, CSS, and React components
          </p>
        </footer>
        
      </div>
    </div>
  );
};

export default Index;
