import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

export const Header = () => {

  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState( JSON.parse( localStorage.getItem("darkMode") ) || false );

  const activeClass = "block py-2 px-3 text-white dark:text-black bg-blue-700 dark:bg-hover-yellow rounded md:bg-transparent md:dark:bg-transparent md:text-blue-700 md:p-0 md:dark:text-hover-yellow";
  const inactiveClass = "block py-2 px-3 text-dark-gray rounded hover:bg-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-light-gray md:dark:hover:text-hover-yellow dark:hover:bg-medium-gray dark:hover:text-light-gray md:dark:hover:bg-transparent dark:border-medium-gray";

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const queryString = event.target.search.value;

    event.target.reset();

    return navigate(`movies/search?query=${queryString}`, {replace: true});
  }

  useEffect( () => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode] );

  return (
    <header>
      <nav className="border-gray-200 bg-gray-200 dark:bg-gray-800 dark:border-medium-gray">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-2 md:py-4 min-w-80">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img id="logo" src={Logo} className="h-8 " alt="Cinemate Logo" />
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-light-gray">Cinemate</span>
          </Link>

          <div id="mobile-nav" className="flex md:order-2">
            <button id="dark-mode" onClick={ () => setDarkMode(!darkMode) } type="button" className="text-gray-500 dark:text-light-gray hover:bg-white dark:hover:bg-medium-gray focus:outline-none rounded-lg text-sm p-2.5 me-1">
              {darkMode ? (
                <svg aria-hidden="true" data-toggle-icon="sun" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              ) : (
                <svg aria-hidden="true" data-toggle-icon="moon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              )}
            </button>

            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-light-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>

              <form onSubmit={handleSubmit}>
                <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-dark-gray border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-medium-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-light-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off' />
              </form>
              
            </div>

            <button onClick={ () => setHidden(!hidden) } data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-light-gray dark:hover:bg-medium-gray dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false" >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            
          </div>

          <div id="navbar-search" className={`${ hidden ? "hidden" : "" } items-center justify-between w-full md:flex md:w-auto md:order-1`}>
            <div className="relative mt-3 md:hidden">
              
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-light-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              
              <form onSubmit={ handleSubmit }>
                <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-dark-gray border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-medium-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-light-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off' />
              </form>

            </div>

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800  dark:border-medium-gray dark:text-light-gray">
              <li>
                <NavLink to="/" className={ ({isActive}) => isActive ? activeClass : inactiveClass } end>Now Playing</NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={ ({isActive}) => isActive ? activeClass : inactiveClass }>Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/toprated" className={ ({isActive}) => isActive ? activeClass : inactiveClass }>Top Rated</NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={ ({isActive}) => isActive ? activeClass : inactiveClass }>Upcoming</NavLink>
              </li>
            </ul>

          </div>

        </div>
      </nav>
    </header>
  )
}
