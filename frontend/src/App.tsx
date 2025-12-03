import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import SideMenu from "./components/SideMenu";
import  FigmeChatScreen  from "./screens/ChatScreen";
import AnalysisResultScreen from "./screens/AnalysisResultScreen";
import RiskScoreScreen from "./screens/RiskScoreScreen";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<"home" | "chat" | "analysis" | "diary">("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [analysisReport, setAnalysisReport] = useState<string>("");

  const handleStartCall = () => {
    setActiveScreen("chat");
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleNavigate = (screen: "home" | "chat" | "analysis" | "diary") => {
    setActiveScreen(screen);
  };
  
  const handleNavigateToAnalysis = (report: string) => {
    setAnalysisReport(report);
    setActiveScreen("analysis");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="relative w-full h-full max-w-[393px] max-h-[852px] mx-auto">
        {activeScreen === "home" && <HomeScreen onMenuClick={handleMenuClick} onStartCall={handleStartCall} />}
        {activeScreen === "chat" && <FigmeChatScreen onMenuClick={handleMenuClick} onNavigateToAnalysis={handleNavigateToAnalysis} />}
        {activeScreen === "analysis" && <AnalysisResultScreen report={analysisReport} onMenuClick={handleMenuClick} />}
        {activeScreen === "diary" && <RiskScoreScreen onMenuClick={handleMenuClick} />}
        
        <SideMenu 
          isOpen={isMenuOpen} 
          onClose={handleMenuClose} 
          onNavigate={handleNavigate}
          currentScreen={activeScreen}
        />
      </div>
    </div>
  );
}
