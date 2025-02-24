import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import LanguageToggle from "./LanguageToggle";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/images/hdv-logo.png" alt="HDV Logo" className="h-20 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/">{t('nav.home')}</Link>
          <Link href="/about">{t('nav.about')}</Link>
          <Link href="/services">{t('nav.services')}</Link>
          <Link href="/education">{t('nav.education')}</Link>
          <Link href="/contact">{t('nav.contact')}</Link>
          <a 
            href="https://betaalverzoek.rabobank.nl/betaalverzoek/?id=33XkU1UVTwKuCEUf5wy6JA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#CD3A2F] font-medium hover:text-[#9C2A22]"
          >
            Doneren
          </a>
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Button className="bg-primary text-white">{t('nav.donate')}</Button>
        </div>
      </div>
    </nav>
  );
}