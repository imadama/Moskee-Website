import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Book, Heart, Church } from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Services Hero */}
      <div className="bg-[#2D2B3F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            {t('services.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4">
            {t('services.subtitle')}
          </h2>
          <p className="text-lg max-w-3xl">
            {t('services.description')}
          </p>
        </div>
      </div>

      <main className="flex-1">
        {/* Services Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={Book}
                title={t('services.education.title')}
                description={t('services.education.description')}
              />
              <ServiceCard 
                icon={Church}
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

        {/* Core Values Section */}
        <section className="pb-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl font-medium mb-2">{t('services.coreValues.title')}</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm">
              {t('services.coreValues.description')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}