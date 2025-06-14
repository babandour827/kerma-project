
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppStateProvider } from "./contexts/AppStateProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Programmes from "./pages/Programmes";
import Investir from "./pages/Investir";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppStateProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
