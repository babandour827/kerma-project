import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppStateProvider } from "./contexts/AppStateProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Programmes from "./pages/Programmes";
import Investir from "./pages/Investir";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useEffect } from "react"; // Import ajouté

const queryClient = new QueryClient();

// Nouveau composant ajouté
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll vers le haut à chaque changement de route
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppStateProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Ajout du composant ScrollToTop ici */}
          <ScrollToTop />
          
          <div className="min-h-screen flex flex-col w-full">
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programmes" element={<Programmes />} />
                <Route path="/investir" element={<Investir />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AppStateProvider>
  </QueryClientProvider>
);

export default App;