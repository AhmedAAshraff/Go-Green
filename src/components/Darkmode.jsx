import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import "./Darkmode.css";
import Switch from "react-switch";
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem('darkModeEnabled' , true);
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem('darkModeEnabled');
    }
  };
  return (
    <div className="moon">
      <label class="switch">
    <input type="checkbox" onChange={handleToggle} checked={darkMode}/>
    <span class="slider"></span>
</label>
    </div>
  );
}
export default DarkModeToggle;
