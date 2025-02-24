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
          <section>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}