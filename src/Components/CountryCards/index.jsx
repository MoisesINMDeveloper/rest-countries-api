import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../../Context';

export default function CountryCards() {
    const { countries, selectedRegion, searchTerm } = useContext(InfoContext);


    // Filtra por región primero, si se ha seleccionado una región
    const filteredByRegion = selectedRegion
        ? countries.filter((country) => country.region === selectedRegion)
        : countries;

    // Luego, filtra por el término de búsqueda
    const filteredCountries = filteredByRegion.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
            {filteredCountries.map((country) => (
                <Link to={`/country/${country.name}`} key={country.name} className="mt-12 bg-[#ffffff] w-[70vw] mx-[auto] md:mx-[.9rem] md:w-[16rem] md:h-[20rem] dark:bg-DarkBlue dark:text-VeryLightGray">
                    < img className="w-full h-[10rem]" src={country.flags.png} alt="Bandera" />
                    <div className="px-6 mt-6 pb-8">
                        <h2 className="font-bold text-lg my-2">{country.name}</h2>
                        <h6 className="font-semibold">Population: <span className="font-light">{country.population}</span></h6>
                        <h6 className="font-semibold">Region: <span className="font-light">{country.region}</span></h6>
                        <h6 className="font-semibold">Capital: <span className="font-light">{country.capital}</span></h6>
                    </div>
                </Link>
            ))}
        </div>
    );
}
