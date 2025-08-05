import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Return to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Attempted to access: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
