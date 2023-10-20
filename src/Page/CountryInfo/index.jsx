import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArrowLeftBlack from '/arrow-back-sharp-black.svg'
import ArrowLeft from '/arrow-back-sharp.svg'
import { InfoContext } from '../../Context';

export default function CountryInfo() {
    const context = useContext(InfoContext);
    const { countryName } = useParams(); // Obtiene el nombre del país de la URL

    // Encuentra la bandera correspondiente según el nombre del país
    const country = context.countries.find((country) => country.name === countryName);

    if (!country) {
        return <div>País no encontrado</div>;
    }

    const borderCountries = country.borders ? country.borders.map((borderCode) => {
        const borderCountry = context.countries.find((c) => c.alpha3Code === borderCode);
        return borderCountry ? borderCountry.name : borderCode;
    }) : [];


    return (
        <section className='flex w-[78vw] md:w-[100vw] justify-center md:justify-start mx-auto'>
            <article className='md:mx-[3rem] md:flex md:mt-[8rem]'>
                <button className='flex dark:bg-DarkBlue w-[6rem] h-[2.2rem] mt-[2rem] mb-[3rem] items-center justify-center px-[auto] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:mt-[-6rem] md:mb-[3rem] md:absolute'>
                    <Link to="/" className="flex dark:bg-DarkBlue text-[#ffff] no-underline">
                        <img className='w-6 h-6 hidden dark:block ml-2' src={ArrowLeft} alt="Arrow" />
                        <img className='w-6 h-6 block ml-2 dark:hidden' src={ArrowLeftBlack} alt="Arrow" />
                        <p className='text-[#000000] dark:text-[#ffff] mx-3'>Back</p>
                    </Link>
                </button>
                <div className='w-[78vw] h-[12rem] md:w-[25rem] md:absolute'>
                    <img className='md:w-[26rem]' src={country.flags.png} alt={country.name} />
                </div>
                <div className='dark:text-VeryLightGray md:flex md:ml-[24rem]'>
                    <div className=' md:ml-[6rem] md:mr-[5rem] md:flex md:flex-wrap md:items-center]'>
                        <div>
                            <h1 className='font-bold text-xl mt-[2rem] mb-6'>{country.name}</h1>
                            <h3 className='font-semibold mb-1'>Native Name: <span className='font-normal'>{country.nativeName}</span></h3>
                            <h3 className='font-semibold mb-1'>Population: <span className='font-normal'>{country.population}</span></h3>
                            <h3 className='font-semibold mb-1'>Region: <span className='font-normal'>{country.region}</span></h3>
                            <h3 className='font-semibold mb-1'>Sub Region: <span className='font-normal'>{country.subregion}</span></h3>
                            <h3 className='font-semibold mb-10'>Capital: <span className='font-normal'>{country.capital}</span></h3>
                        </div>
                        <div className='md:mt-[5.2rem] md:ml-[6rem]'>
                            <h3 className='font-semibold mb-1'>Top Level Domain: <span className='font-normal'>{country.topLevelDomain}</span></h3>
                            <h3 className='font-semibold mb-1'>Currencies: <span className='font-normal'>{country.currencies && country.currencies.length > 0 ? country.currencies[0].name : 'N/A'}</span></h3>
                            <h3 className='font-semibold mb-10'>Languages: <span className='font-normal'>{country.languages.map((language, index) => (
                                <span key={index}>{language.name} </span>
                            ))}</span></h3>
                        </div>
                        <div className='flex-col items-start mb-10 md:flex md:flex-row'>
                            <h2 className='font-semibold text-lg dark:text-VeryLightGray mb-2 md:mt-[0.3rem] md:block md:w-[11rem] md:absolute'>{borderCountries.length > 0 ? "Border Countries:" : "No Border Countries"}</h2>
                            <ul className='flex flex-wrap md:ml-[10rem]'>
                                {borderCountries.map((borderCountry, index) => (
                                    <li className='dark:bg-DarkBlue mr-2 my-2 rounded-sm shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' key={index}>
                                        <p className='mx-4'>{borderCountry}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </section >
    );
}
