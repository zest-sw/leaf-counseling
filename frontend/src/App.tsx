import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import SideMenu from "./components/SideMenu";
import { RefactoredChatScreen } from "./screens/RefactoredChatScreen";
import AnalysisResultScreen from "./screens/AnalysisResultScreen";
import RiskScoreScreen from "./screens/RiskScoreScreen";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<"home" | "chat" | "analysis" | "diary">("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="relative h-[852px] w-[393px]">
        {activeScreen === "home" && <HomeScreen onMenuClick={handleMenuClick} onStartCall={handleStartCall} />}
        {activeScreen === "chat" && <RefactoredChatScreen onMenuClick={handleMenuClick} />}
        {activeScreen === "analysis" && <AnalysisResultScreen onMenuClick={handleMenuClick} />}
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
