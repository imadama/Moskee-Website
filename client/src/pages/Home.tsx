import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Book, Heart, Building2 } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <Hero />

      <main className="flex-1">
        {/* Services Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-12">
              {t('services.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={Book}
                title={t('services.education.title')}
                description={t('services.education.description')}
              />
              <ServiceCard 
                icon={Building2}
                title={t('services.prayer.title')}
                description={t('services.prayer.description')}
              />
              <ServiceCard 
                icon={Heart}
                title={t('services.community.title')}
                description={t('services.community.description')}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6">
                  {t('education.title')}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t('education.description')}
                </p>
                <Button className="bg-primary text-white">
                  {t('education.learnMore')}
                </Button>
              </div>
              <div>
                <img 
                  src="https://placehold.co/600x400" 
                  alt="Education"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-[#2D2B3F] text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">
              {t('contact.title')}
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
            <Button className="bg-primary text-white">
              {t('contact.getInTouch')}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}