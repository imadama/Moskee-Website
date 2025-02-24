import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div 
      className="relative h-[600px] bg-cover bg-center" 
      style={{ 
        backgroundImage: 'url("/aerial-mosque.jpg")',
        backgroundPosition: 'center 40%'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <h2 className="text-xl mb-2">{t('hero.welcome')}</h2>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          {t('hero.description')}
        </p>
        <Button className="bg-white text-black hover:bg-gray-100 w-fit">
          {t('hero.learnMore')}
        </Button>
      </div>
    </div>
  );
}