import { createContext, useState, useEffect } from "react";
import data from "../API/data.json";

export const InfoContext = createContext();

export const ContextProvider = ({ children }) => {
    const [countriesData, setCountriesData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("");
    const [isRegionOpen, setIsRegionOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false); // Estado para el modo claro/oscuro
    const [searchTerm, setSearchTerm] = useState(''); // Agrega el estado del término de búsqueda

    useEffect(() => {
        setCountriesData(data);
    }, []);

    const allowedRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    // Función para cambiar el modo claro/oscuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        setCountriesData(data);
    }, []);

    const toggleRegion = () => {
        setIsRegionOpen(!isRegionOpen);
    };

    const handleRegionClick = (event) => {
        const region = event.target.textContent;
        setSelectedRegion(region);
    };

    return (
        <InfoContext.Provider value={{ countries: countriesData, selectedRegion, setSelectedRegion, isRegionOpen, toggleRegion, handleRegionClick, allowedRegions, toggleDarkMode, searchTerm, setSearchTerm }}>
            {children}
        </InfoContext.Provider>
    );
};