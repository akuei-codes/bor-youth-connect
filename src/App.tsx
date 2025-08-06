import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Community from "./pages/Community";
import Map from "./pages/Map";
import Spotlight from "./pages/Spotlight";
import Opportunities from "./pages/Opportunities";
import Forum from "./pages/Forum";
import Auth from "./pages/Auth";
import JoinBorNet from "./pages/JoinBorNet";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import ProfilePhoto from "./pages/ProfilePhoto";
import NotFound from "./pages/NotFound";
import PendingDataHandler from "./components/PendingDataHandler";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PendingDataHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/community" element={<Community />} />
          <Route path="/map" element={<Map />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/join" element={<JoinBorNet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/photo" element={<ProfilePhoto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
