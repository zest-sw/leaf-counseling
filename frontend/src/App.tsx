import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import SideMenu from "./components/SideMenu";
import ChatScreen from "./screens/ChatScreen";
import AnalysisResultScreen from "./screens/AnalysisResultScreen";
import RiskScoreScreen from "./screens/RiskScoreScreen";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<"home" | "chat" | "analysis" | "diary">("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [report, setReport] = useState<string | null>(null);

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
    setReport(report);
    setActiveScreen("analysis");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="relative w-full h-full max-w-[393px] max-h-[852px] mx-auto">
        {activeScreen === "home" && <HomeScreen onMenuClick={handleMenuClick} onStartCall={handleStartCall} />}
<<<<<<< HEAD
        {activeScreen === "chat" && <RefactoredChatScreen onMenuClick={handleMenuClick} onNavigateToAnalysis={handleNavigateToAnalysis} />}
        {activeScreen === "analysis" && <AnalysisResultScreen onMenuClick={handleMenuClick} report={report} />}
=======
        {activeScreen === "chat" && <ChatScreen onMenuClick={handleMenuClick} />}
        {activeScreen === "analysis" && <AnalysisResultScreen onMenuClick={handleMenuClick} />}
>>>>>>> parent of 92d2e5c (채팅 ui 컴포넌트 화)
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
