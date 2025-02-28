import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Education() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative h-[600px] bg-cover bg-center" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/education-hero.jpg)'
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-6">
            <p className="text-white uppercase tracking-wider mb-4">
              {t('education.hero.subtitle')}
            </p>
            <h1 className="text-white text-5xl md:text-6xl font-serif mb-6">
              {t('education.hero.title')}
            </h1>
            <p className="text-white text-lg mb-8 max-w-2xl">
              {t('education.hero.description')}
            </p>
            <Button 
              className="bg-[#2D2B3F] text-white hover:bg-[#3D3B4F] w-fit px-8 py-6 text-lg"
            >
              {t('education.hero.registerButton')}
            </Button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#CD3A2F] text-3xl mb-8">
            {t('education.details.title')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              {t('education.details.paragraph1')}
            </p>
            <p className="mb-6">
              {t('education.details.paragraph2')}
            </p>
            <p className="mb-8">
              {t('education.details.paragraph3')}{' '}
              <Link href="/contact" className="text-[#CD3A2F] hover:underline">
                {t('education.details.contact')}
              </Link>{' '}
              {t('education.details.withUs')}
            </p>
            <Button 
              className="bg-[#2D2B3F] text-white hover:bg-[#3D3B4F] px-8 py-6 text-lg"
            >
              {t('education.details.registerButton')}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
          className="relative py-20 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("/images/contact-background.jpg")',
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

      <Footer />
    </div>
  );
}