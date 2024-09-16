import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herotop from "@/components/Herotop";
import Products from "@/components/Products";


export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <Herotop/>

      {/* Produits */}
      <Products/>

      {/* À propos */}
      <section className="bg-gray-50 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">À propos de Les Alimfa</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-700">
          Les Alimfa est une marque dédiée à la beauté naturelle. Nous nous engageons à fournir des produits cosmétiques
          de qualité, fabriqués à partir d'ingrédients naturels, pour révéler la beauté de chaque personne.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contactez-nous</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600">Envoyer</button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
