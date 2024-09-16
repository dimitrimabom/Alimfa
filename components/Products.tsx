import React from 'react'
import Image from "next/image";

export default function Products() {
  return (
    <section id="produits" className="py-16 px-8 bg-gray-100">
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Produits</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {/* Produit Exemple */}
    <div className="border rounded-xl overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative">
        <Image 
          src="/path-to-product1.jpg" 
          alt="Produit 1" 
          width={400} 
          height={400} 
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4 flex flex-col items-start">
        <h3 className="text-lg font-semibold mb-1">Crème Hydratante</h3>
        <p className="text-gray-500 text-sm mb-3">Prix : 25€</p>
        <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-300 w-full">
          Voir plus
        </button>
      </div>
    </div>

    {/* Répéter pour les autres produits */}
    <div className="border rounded-xl overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative">
        <Image 
          src="/path-to-product2.jpg" 
          alt="Produit 2" 
          width={400} 
          height={400} 
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4 flex flex-col items-start">
        <h3 className="text-lg font-semibold mb-1">Sérum Visage</h3>
        <p className="text-gray-500 text-sm mb-3">Prix : 35€</p>
        <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-300 w-full">
          Voir plus
        </button>
      </div>
    </div>

    {/* Ajouter d'autres produits */}
  </div>
</section>


  )
}
