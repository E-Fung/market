import React, { useState, useMemo } from 'react';
import { cart, logo, empty_user } from '../assets';
import { useLocation, Link } from 'react-router-dom';
//mx-auto - centers container
//max-w-7xl - constrains the container

//relative makes it so that the sub component's css is relative to this container
const Navbar = () => {
  let location = useLocation().pathname;
  const [userMenu, setUserMenu] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);

  const menuItems = useMemo(() => {
    return [
      ['men', "Men's Clothing"],
      ['women', "Women's Clothing"],
      ['jewelry', 'Jewelry'],
      ['electronics', 'Electronics'],
    ];
  }, []);

  const userMenuItems = useMemo(() => {
    return [
      ['men', 'Your Profile'],
      ['women', 'Sign out'],
    ];
  }, []);

  const toggleUserMenu = () => {
    setUserMenu(!userMenu);
  };
  const toggleShopMenu = () => {
    setShopMenu(!shopMenu);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleShopMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`${!shopMenu ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}`} />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to={'/'}>
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-16 w-auto" src={logo} alt="" />
                <img className="hidden lg:block h-16 w-auto" src={logo} alt="" />
              </div>
            </Link>
            <div className="hidden items-center sm:flex sm:ml-6">
              <div className="flex space-x-4">
                {menuItems.map(([link, title]) => (
                  <Link to={`/${link}`}>
                    <div
                      className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                        location === `/${link}` ? 'bg-gray-900 text-white' : ''
                      }`}
                    >
                      {title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <img className="h-8" src={cart} alt="" />
            </button>

            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleUserMenu}
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src={empty_user} alt="" />
                </button>
              </div>
              {userMenu && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  {userMenuItems.map(([link, title], index) => (
                    <div
                      onClick={toggleUserMenu}
                      className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:text-orange-500 hover:underline"
                      role="menuitem"
                      tabindex="-1"
                      id={`user-menu-item-${index}`}
                    >
                      {title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {shopMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map(([link, title]) => (
              <Link to={`/${link}`}>
                <div
                  onClick={toggleShopMenu}
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                    location === `/${link}` ? 'bg-gray-900 text-white' : ''
                  }`}
                >
                  {title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
