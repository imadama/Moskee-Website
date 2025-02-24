import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2D2B3F] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-xl mb-4">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2">
            <li><Link href="/">{t('nav.home')}</Link></li>
            <li><Link href="/about">{t('nav.about')}</Link></li>
            <li><Link href="/services">{t('nav.services')}</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-4">{t('footer.contact')}</h4>
          <ul className="space-y-2">
            <li>Appelmarkt 12, 4201 HH</li>
            <li>Gorinchem</li>
            <li>info@hdvgorinchem.nl</li>
            <li>085-066-3133</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
