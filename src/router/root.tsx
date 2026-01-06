import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { LoadingSpinner } from "../components/loading-spinner/LoadingSpinner";
import FloatingAIButton from "../components/floating-ai-button/FloatingAIButton";
import ChatModal from "../components/chat-modal/ChatModal";
import SearchModal from "../components/search-modal/SearchModal";
import LanguageModal from "../components/language-modal/LanguageModal";
import { Error404 } from "../pages/error/Error404";
import { Error500 } from "../pages/error/Error500";
// @ts-ignore - NavbarBehavior is implemented in JSX; 

import NavbarBehavior from "../components/navbar/NavbarBehavior";

export const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <Error404 />,
  errorComponent: () => <Error500 />,
})

function RootLayout() {
  
  // Hide footer for specific routes like signin
  const hideFooterPrefixes: string[] = ["/signin", "/registration", "/duplicate-checker", "/duplicate-checker-2", "/forget-password", "/otp-request", "/reset-password", "/user-info-interface", "/404", "/500", "/contact-us"];

  
  const path = typeof window !== 'undefined' ? window.location.pathname : ''

  
    // Hide Navbar for specific routes
    const hideNavbarPrefixes: string[] = [];

  
    // Hide FloatingAIButton for specific routes (Home and --)
    const hideFloatingAIButtonPrefixes: string[] = ["/"];
    const showNavbar = !hideNavbarPrefixes.some(prefix => path.startsWith(prefix));
    const showFooter = !hideFooterPrefixes.some(prefix => path.startsWith(prefix));
    const showFloatingAIButton = !hideFloatingAIButtonPrefixes.some(prefix => path === prefix);


  
  return (
    <div>
      <LoadingSpinner />
      <NavbarBehavior />
      <ChatModal />
      <SearchModal />
      <LanguageModal />
      {showNavbar && <Navbar />}
      <Outlet />
      {showFloatingAIButton && <FloatingAIButton />}
      {showFooter && <Footer />}
    </div>
  )
}
