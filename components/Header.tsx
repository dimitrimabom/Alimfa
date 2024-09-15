export default function Header() {
    return (
        <header className="bg-gray-900 text-gray-200 sticky top-0 z-50 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center">
      <a href="#" className="text-3xl font-bold text-green-500">Les Alimfa</a>
    </div>

    {/* Navigation */}
    <nav className="hidden md:flex space-x-8">
      <a href="#" className="hover:text-green-500 transition duration-300">Accueil</a>
      <a href="#products" className="hover:text-green-500 transition duration-300">Produits</a>
      <a href="#about" className="hover:text-green-500 transition duration-300">À propos</a>
      <a href="#contact" className="hover:text-green-500 transition duration-300">Contact</a>
    </nav>

    {/* Call to Action (Boutique / Contact) */}
    <div className="hidden md:flex">
      <a
        href="#shop"
        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
      >
        Boutique
      </a>
    </div>

    {/* Menu mobile */}
    <div className="md:hidden">
      <button className="text-gray-200 focus:outline-none">
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
</header>

    )}