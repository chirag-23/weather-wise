import React,{useEffect,useState} from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {

    const [theme, setTheme] = useState(null)

    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme("dark");
        }else{
        setTheme("light");
        }
    }, [])

    useEffect(()=>{
        if(theme === "dark"){
        document.documentElement.classList.add("dark");
        }else{
        document.documentElement.classList.remove("dark");
        }
    },[theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

  return (
    <div className="fixed top-0 z-20 w-screen sm:px-4 sm:py-3 py-2 px-2 flex justify-between items-center">
        <div className="sm:p-4 text-gray-800 dark:text-gray-300">
          <p className="font-extrabold tracking-wide  sm:text-3xl text-xl text-gray-800 dark:text-gray-300">
              WEATHER WISE
          </p>
          <p className="text-right text-xs text-gray-700 dark:text-gray-400">by <a href="https://developercc.com" rel="noreferrer" target="_blank" className="hover:underline hover:text-gray-700 dark:hover:text-gray-400">developercc.com</a></p>
        </div>
        <button className="bg-gray-50 dark:bg-gray-200 sm:m-4 sm:px-4 sm:py-2 py-1 px-2 rounded-xl" onClick={handleThemeSwitch}>
        {
          theme === "dark" ? <LightModeIcon/> : <DarkModeIcon/>
        }
        {
          theme === "dark" ? <span className="sm:px-2 px-1">Light</span> : <span className="sm:px-2 px-1">Dark</span>
        }
        </button>
    </div>
  )
}

export default Navbar