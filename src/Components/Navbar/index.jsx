import { useState, useEffect } from 'react';
import MoonIcon from "/moon-com.svg";
import MoonIconSharp from "/moon-sharp.svg";

export default function Navbar() {
    const prevTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(() => {
        if (prevTheme) {
            return prevTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.remove('light');
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-White dark:bg-DarkBlue dark:text-White shadow-md">
            <h1 className="font-bold text-lg">Where in the world?</h1>
            <button className="flex items-center" >
                {theme === "dark" ? (
                    //DarkMode
                    <img
                        src={MoonIcon}
                        alt="Moon Icon"
                        width={20}
                        height={20}
                        onClick={toggleTheme}
                    />
                ) : (
                    // LightMode
                    <img
                        src={MoonIconSharp}
                        alt="Moon Icon"
                        width={20}
                        height={20}
                        onClick={toggleTheme}
                    />
                )}
                <p className="font-semibold ml-2" onClick={toggleTheme}>Dark Mode</p></button>
        </nav>
    )
}