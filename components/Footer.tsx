
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Colonne 1 : Logo et description */}
      <div>
        <h2 className="text-2xl font-semibold text-green-500">Les Alimfa</h2>
        <p className="mt-4 text-gray-400">
          Produits cosmétiques naturels pour sublimer votre beauté. Découvrez nos soins pour une peau éclatante et naturelle.
        </p>
      </div>
  
      {/* Colonne 2 : Liens de navigation */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-green-500 transition">Accueil</a></li>
          <li><a href="#" className="hover:text-green-500 transition">Produits</a></li>
          <li><a href="#" className="hover:text-green-500 transition">À propos</a></li>
          <li><a href="#" className="hover:text-green-500 transition">Contact</a></li>
        </ul>
      </div>
  
      {/* Colonne 3 : Suivez-nous */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-500 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.523 0-10 4.478-10 10 0 4.991 3.657 9.128 8.437 9.879v-6.987h-2.54v-2.892h2.54v-2.2c0-2.507 1.492-3.888 3.778-3.888 1.095 0 2.24.194 2.24.194v2.462h-1.262c-1.243 0-1.63.77-1.63 1.558v1.873h2.773l-.443 2.892h-2.33v6.987C18.343 21.168 22 17.031 22 12.04c0-5.522-4.478-10-10-10z" />
            </svg>
          </a>
          <a href="#" className="hover:text-green-500 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.75 2.04c-1.478.653-3.068 1.097-4.758 1.298a8.336 8.336 0 0 0 3.656-4.597c-1.654.979-3.48 1.687-5.402 2.072a8.272 8.272 0 0 0-6.176-2.682C5.928 0.23 3.503 2.652 3.503 5.552c0 .417.05.824.136 1.216C2.333 6.494 1.259 5.46.542 4.07a5.543 5.543 0 0 0-.749 2.803c0 1.937.982 3.646 2.472 4.651a8.272 8.272 0 0 1-3.744-1.032v.104a5.56 5.56 0 0 0 4.452 5.435c-.834.227-1.707.27-2.604.105.745 2.315 2.907 4.004 5.471 4.049a11.11 11.11 0 0 1-6.884 2.374c-.447 0-.885-.027-1.316-.079a15.73 15.73 0 0 0 8.509 2.49c10.2 0 15.78-8.445 15.78-15.782 0-.24-.005-.48-.016-.72 1.084-.782 2.028-1.764 2.77-2.881z" />
            </svg>
          </a>
          <a href="#" className="hover:text-green-500 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.499 6.29c-.815.363-1.692.608-2.616.718a4.564 4.564 0 0 0 2.004-2.514 9.073 9.073 0 0 1-2.87 1.095 4.543 4.543 0 0 0-7.752 4.142 12.893 12.893 0 0 1-9.362-4.748 4.523 4.523 0 0 0 1.407 6.064 4.534 4.534 0 0 1-2.057-.568v.058a4.542 4.542 0 0 0 3.645 4.448 4.534 4.534 0 0 1-2.048.077 4.544 4.544 0 0 0 4.244 3.153A9.114 9.114 0 0 1 0 20.232a12.853 12.853 0 0 0 6.964 2.041c8.353 0 12.916-6.92 12.916-12.916 0-.197-.005-.393-.013-.588.888-.643 1.656-1.447 2.261-2.362z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  
    <div className="mt-8 border-t border-gray-700 pt-8">
      <p className="text-center text-sm">&copy; 2024 Les Alimfa. Tous droits réservés.</p>
    </div>
  </footer>
  
  );
}
