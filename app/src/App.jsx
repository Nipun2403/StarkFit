import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./modules/Navbar/Navbar";
import { Page } from "./shared/pages";
import Home from "./modules/home/Home";

// Main
function App() {
  // State for Current Page
  const [selectedPage, setSelectedPage] = useState(Page.Home);

  // State to know if the user in on top of the page
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(Page.Home);
      }

      if (window.scrollY != 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="px-12">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home />
    </div>
  );
}

export default App;
