import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#2D2B3F] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          {t('hero.title')}
        </h1>
      </div>
    </div>
  );
}
