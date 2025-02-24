import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />

      <main className="flex-1">
        {/* History Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/community-gathering.jpg" 
                alt="Community gathering at the mosque"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-primary font-medium mb-4">{t('history.subtitle')}</p>
              <h2 className="text-3xl font-serif mb-6">{t('history.title')}</h2>
              <p className="text-gray-600 mb-8">{t('history.description')}</p>
              <Button variant="outline">{t('history.readMore')}</Button>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section 
          className="relative py-16 px-6 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("/mosque-interior.jpg")',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl font-serif mb-6">{t('support.title')}</h2>
            <p className="mb-8 max-w-2xl mx-auto">{t('support.description')}</p>
            <Button className="bg-white text-black hover:bg-gray-100">
              {t('support.joinNow')}
            </Button>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">{t('education.title')}</h2>
              <p className="text-gray-600 mb-6">{t('education.description')}</p>
              <ul className="space-y-4 mb-8">
                {t('education.bulletPoints', { returnObjects: true }).map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline">{t('education.learnMore')}</Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/quran-education.jpg" 
                alt="Quran Education"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          className="relative py-20 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("/interior-mosque.jpg")',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
            <Button className="bg-[#2D2B3F] text-white hover:bg-[#3D3B4F] text-lg px-8 py-6">
              {t('contact.getInTouch')}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}