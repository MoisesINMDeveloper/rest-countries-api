import { useContext } from 'react';
import { InfoContext } from '../../Context';
import CountryCards from '../../Components/CountryCards';

import SearchIcon from '/search-outline.svg';
import SearchIconBlack from "/search-outline-black.svg"
import ChevronDown from '/chevron-down-outline.svg';
import ChevronDownBlack from '/chevron-down-black.svg';
import ChevronUpBlack from '/chevron-up-black.svg';
import ChevronUp from '/chevron-up-outline.svg';

export default function Home() {
    const { selectedRegion, toggleRegion, handleRegionClick, isRegionOpen, allowedRegions, darkMode, toggleDarkMode, searchTerm, setSearchTerm, countries } = useContext(InfoContext);

    const filteredCountriesByRegion = selectedRegion
        ? countries.filter((country) => country.region === selectedRegion)
        : countries;
    return (
        <main className={`w-[90vw] mt-5 mx-auto ${darkMode ? 'dark' : ''}`}>
            <div className='md:flex md:items-center md:mt-[2rem] md:w-[90vw]'>
                <label className={`flex items-center h-14 w-[90vw] md:w-[25rem] mx-auto md:mr-[30.6rem] rounded-md dark:bg-DarkBlue ${darkMode ? 'dark:bg-DarkBlue' : 'bg-White'}`} htmlFor="">
                    <button className={`mx-3 px-2 h-12 dark:bg-DarkBlue ${darkMode ? 'dark:bg-DarkBlue' : 'bg-White'}`} onClick={toggleDarkMode}>
                        <img className="w-5 h-5 md:w-14 hidden dark:block " src={SearchIcon} alt="Search icon" />
                        <img className="w-5 h-5 block md:w-14 dark:hidden" src={SearchIconBlack} alt="Search icon" />
                    </button>
                    <input
                        className={`h-10 w-[72vw] dark:text-[#fafafa] dark:bg-DarkBlue placeholder:font-semibold placeholder:text-VeryDarkBlue2 placeholder:dark:text-[#fafafa] ${darkMode ? 'dark:placeholder:text-[#fafafa]' : 'placeholder:text-[#ffffff]'} px-[1rem] mr-3 text-sm ${darkMode ? 'dark:bg-DarkBlue' : 'bg-White'}`}
                        type="text"
                        placeholder="Search for a country..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
                <div className={`h-14 w-[14rem] md:mr-[1rem] dark:bg-DarkBlue ${darkMode ? 'dark:bg-DarkBlue' : 'bg-[#ffffff]'} rounded-md mt-12 mb-2 md:mt-2 px-auto`}>
                    {selectedRegion ? (
                        <div className="flex items-center justify-between px-5 h-14" onClick={toggleRegion}>
                            <p className="font-semibold text-sm dark:text-[#fafafa]">
                                {selectedRegion}
                            </p>
                            <img
                                className={`w-4 h-4 hidden dark:block ${isRegionOpen ? "dark:hidden" : ""}`}
                                src={ChevronDown}
                                alt="Chevron down"
                            />
                            <img
                                className={`w-4 h-4 block dark:hidden ${isRegionOpen ? "hidden" : ""}`}
                                src={ChevronDownBlack}
                                alt="Chevron down"
                            />
                            <img
                                className={`w-4 h-4 hidden dark:block ${isRegionOpen ? "" : "dark:hidden"}`}
                                src={ChevronUp}
                                alt="Chevron Up"
                            />
                            <img
                                className={`w-4 h-4 block dark:hidden ${isRegionOpen ? "" : "hidden"}`}
                                src={ChevronUpBlack}
                                alt="Chevron Up"
                            />
                        </div>
                    ) : (
                        <div className="flex items-center h-14 px-5" onClick={toggleRegion}>
                            <p className="font-semibold text-sm mr-16 dark:text-[#fafafa]">
                                Filter by Region
                            </p>
                            <img
                                className={`w-4 h-4 hidden dark:block ${isRegionOpen ? "dark:hidden" : ""}`}
                                src={ChevronDown}
                                alt="Chevron down"
                            />
                            <img
                                className={`w-4 h-4 block dark:hidden ${isRegionOpen ? "hidden" : ""}`}
                                src={ChevronDownBlack}
                                alt="Chevron down"
                            />
                            <img
                                className={`w-4 h-4 hidden dark:block ${isRegionOpen ? "" : "dark:hidden"}`}
                                src={ChevronUp}
                                alt="Chevron Up"
                            />
                            <img
                                className={`w-4 h-4 block dark:hidden ${isRegionOpen ? "" : "hidden"}`}
                                src={ChevronUpBlack}
                                alt="Chevron Up"
                            />
                        </div>
                    )}
                </div>
                <div
                    className={`${isRegionOpen ? "bg-[#ffffff] dark:bg-DarkBlue absolute w-[14rem] md:ml-[56.5rem] md:mt-[15.5rem] rounded-md pl-[1.3rem] py-[1rem]" : "hidden"
                        }`}
                >
                    <ul>
                        {allowedRegions.map((region) => (
                            <li className="font-semibold text-sm my-2" key={region}>
                                <button className="inline-block dark:text-[#fafafa]" onClick={handleRegionClick}>
                                    {region}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <CountryCards selectedRegion={selectedRegion}
                countries={searchTerm ? countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())) : filteredCountriesByRegion}
            />
        </main>
    );
}
