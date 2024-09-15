export default function Herotop() {return(
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay noir avec opacité */}
  
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Bienvenue chez <span className="text-green-500">Les Alimfa</span>
    </h1>
    <p className="text-lg md:text-2xl max-w-2xl mb-8">
      Découvrez notre gamme de produits cosmétiques naturels et redécouvrez la beauté au naturel.
    </p>
    
    <a href="#products" className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
      Découvrir nos produits
    </a>
  </div>
</section>

)}