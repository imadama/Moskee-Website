import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div 
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-background.jpg")',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif">Over ons</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Who We Are Section */}
          <section className="mb-24">
            <h2 className="text-gray-500 mb-2">WIE WIJ ZIJN</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/470880607_2406169843057251_6182270794598670102_n.jpg"
                  alt="Süleyman Çelebi Camii Interior"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[#CD3A2F] text-3xl mb-6">
                  Uw vertrouwde moskee in Gorinchem
                </h3>
                <p className="text-gray-700 mb-6">
                  Süleyman Çelebi Camii is sinds 1979 gevestigd in het hart van Gorinchem en maakt deel uit van de Hollanda Diyanet Vakfi. Onze moskee is een spiritueel en sociaal middelpunt waar moslims samenkomen voor gebed, rust en verbinding binnen de gemeenschap.
                </p>
                <p className="text-gray-700 mb-6">
                  Naast dagelijkse gebeden bieden we diverse diensten aan, zoals Koranlessen voor kinderen, begeleiding bij islamitische huwelijken en ondersteuning bij uitvaarten. Ook organiseren we activiteiten voor vrouwen via onze vrouwencommissie, waarbij educatie en samenzijn centraal staan.
                </p>
                <p className="text-gray-700 mb-8">
                  Met aandacht voor religieuze en maatschappelijke behoeften streven wij ernaar een plek te zijn waar iedereen zich welkom voelt en zich kan ontwikkelen binnen een hechte gemeenschap.
                </p>
                <Button variant="default">
                  Lid worden
                </Button>
              </div>
            </div>
          </section>

          {/* Mission and Vision Section */}
          <section>
            <h2 className="text-gray-500 mb-2">ONZE MISSIE EN VISIE</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Content */}
              <div>
                <h3 className="text-[#CD3A2F] text-4xl font-serif mb-6">
                  Leren, verbinden en groeien
                </h3>
                <p className="text-gray-700 mb-8">
                  Bij Süleyman Çelebi Camii staan onderwijs en gemeenschap centraal. Wij begeleiden kinderen bij het leren lezen van de Koran en het ontwikkelen van islamitische waarden. Onze visie is om een sterke generatie op te bouwen die geworteld is in hun geloof en betrokken is bij de samenleving.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#CD3A2F] text-xl">•</span>
                    <span className="text-gray-700">Onderwijs voor kinderen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#CD3A2F] text-xl">•</span>
                    <span className="text-gray-700">Activiteiten en bijeenkomsten speciaal voor vrouwen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#CD3A2F] text-xl">•</span>
                    <span className="text-gray-700">Samen bouwen aan een sterke en hechte gemeenschap</span>
                  </li>
                </ul>
                <Button variant="outline" className="bg-[#CD3A2F] text-white hover:bg-[#B22A20]">
                  Onderwijs volgen
                </Button>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/Screenshot 2025-02-24 at 22.46.27.png"
                  alt="Community Members"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mt-24">
            <h2 className="text-gray-500 mb-2">ONTMOET ONS TEAM</h2>
            <div className="text-center mb-12">
              <h3 className="text-[#CD3A2F] text-4xl font-serif mb-4">
                De mensen achter Süleyman Çelebi Camii
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Ons toegewijde team werkt hard om de moskee goed te beheren en de gemeenschap te ondersteunen. Zij staan klaar om alles soepel en georganiseerd te laten verlopen.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/man-male-young-person-icon-vector-10458750.jpg" 
                    alt="Turan Aslan"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Turan Aslan</h4>
                  <p className="text-gray-600">Imaam</p>
                </div>
              </div>

              {/* Team Member Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/man-male-young-person-icon-vector-10458750.jpg" 
                    alt="Gökhan Önder"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Gökhan Önder</h4>
                  <p className="text-gray-600">Voorzitter</p>
                </div>
              </div>

              {/* Team Member Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/man-male-young-person-icon-vector-10458750.jpg" 
                    alt="Gökhan Temirpolat"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Gökhan Temirpolat</h4>
                  <p className="text-gray-600">Vicevoorzitter</p>
                </div>
              </div>

              {/* Team Member Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/man-male-young-person-icon-vector-10458750.jpg" 
                    alt="Gökhan Çiftçi"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Gökhan Çiftçi</h4>
                  <p className="text-gray-600">Penningmeester</p>
                </div>
              </div>

              {/* Team Member Card 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/man-male-young-person-icon-vector-10458750.jpg" 
                    alt="Zafer Güven"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Zafer Güven</h4>
                  <p className="text-gray-600">Secretaris</p>
                </div>
              </div>

              {/* Team Member Card 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/man-male-young-person-icon-vector-10458750.jpg" 
                    alt="Mahmut Demirel"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Mahmut Demirel</h4>
                  <p className="text-gray-600">Kassier</p>
                </div>
              </div>

              {/* Team Member Card 7 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/man-male-young-person-icon-vector-10458750.jpg" 
                    alt="Şeref Kaya"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Şeref Kaya</h4>
                  <p className="text-gray-600">Lid</p>
                </div>
              </div>

              {/* Team Member Card 8 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/man-male-young-person-icon-vector-10458750.jpg" 
                    alt="Sefa Aydin"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Sefa Aydin</h4>
                  <p className="text-gray-600">Lid</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}