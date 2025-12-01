import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import SideMenu from "./components/SideMenu";
import Frame8 from "./imports/Frame10";
import Frame1 from "./imports/Frame11";
import Frame from "./imports/Frame12";

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
        {activeScreen === "chat" && <Frame8 onMenuClick={handleMenuClick} />}
        {activeScreen === "analysis" && <Frame1 onMenuClick={handleMenuClick} />}
        {activeScreen === "diary" && <Frame onMenuClick={handleMenuClick} />}
        
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
