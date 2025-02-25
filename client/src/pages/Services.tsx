import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Book, Heart, Church } from "lucide-react";
import { Button } from "@/components/ui/button";

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

        {/* Children's Education Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src="/images/480035679_2449929562014612_1981348576737948205_n.jpg"
                  alt="Children's education session"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-[#CD3A2F] text-3xl mb-4">
                  {t('services.children.title')}
                </h2>
                <h3 className="text-gray-900 text-xl mb-4">
                  {t('services.children.subtitle')}
                </h3>
                <p className="text-gray-700 mb-8">
                  {t('services.children.description')}
                </p>
                <Button
                  asChild
                  className="bg-[#2D2B3F] text-white hover:bg-[#3D3B4F]"
                >
                  <Link href="/education">
                    {t('services.children.learnMore')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#2D2B3F] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
            <Button 
              asChild
              className="bg-white text-[#2D2B3F] hover:bg-gray-100"
            >
              <Link href="/contact">
                {t('contact.getInTouch')}
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}