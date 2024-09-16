'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture du menu mobile

  // Gérer le verrouillage du défilement et rendre le contenu non cliquable
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen); // Ouvrir/fermer le menu mobile
  };

  return (
    <header className="bg-gray-900 text-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-3xl font-bold text-green-500">Les Alimfa</a>
        </div>

        {/* Navigation pour desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-green-500 transition duration-300">Accueil</a>
          <a href="#products" className="hover:text-green-500 transition duration-300">Produits</a>
          <a href="#about" className="hover:text-green-500 transition duration-300">À propos</a>
          <a href="#contact" className="hover:text-green-500 transition duration-300">Contact</a>
        </nav>

        {/* Call to Action (Boutique) pour desktop */}
        <div className="hidden md:flex">
          <a
            href="#shop"
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
          >
            Boutique
          </a>
        </div>

        {/* Menu mobile (bouton burger) */}
        <div className="md:hidden">
          <button
            className="text-gray-200 focus:outline-none"
            onClick={handleToggleMenu} // Gérer l'ouverture/fermeture du menu
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile en plein écran */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-90 z-40 flex flex-col justify-center items-center"
        >
          <button
            className="absolute top-4 right-4 text-gray-200 focus:outline-none"
            onClick={handleToggleMenu} // Gérer la fermeture du menu via la croix
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <nav className="flex flex-col items-center space-y-8">
            <a href="#" className="text-2xl text-gray-200 hover:text-green-500 transition duration-300" onClick={handleToggleMenu}>Accueil</a>
            <a href="#products" className="text-2xl text-gray-200 hover:text-green-500 transition duration-300" onClick={handleToggleMenu}>Produits</a>
            <a href="#about" className="text-2xl text-gray-200 hover:text-green-500 transition duration-300" onClick={handleToggleMenu}>À propos</a>
            <a href="#contact" className="text-2xl text-gray-200 hover:text-green-500 transition duration-300" onClick={handleToggleMenu}>Contact</a>
            <a
              href="#shop"
              className="text-xl bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300"
              onClick={handleToggleMenu}
            >
              Boutique
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
