import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import LanguageToggle from "./LanguageToggle";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/images/hdv-logo.png" alt="HDV Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
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

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Button className="bg-primary text-white">{t('nav.donate')}</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={32} />
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-[#2D2B3F] z-50 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/">
                <img src="/images/hdv-logo.png" alt="HDV Logo" className="h-20 w-auto" />
              </Link>
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-white text-xl">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/over-ons" onClick={() => setIsMobileMenuOpen(false)}>
                Over ons
              </Link>
              <Link href="/onderwijs" onClick={() => setIsMobileMenuOpen(false)}>
                Onderwijs
              </Link>
              <Link href="/diensten" onClick={() => setIsMobileMenuOpen(false)}>
                Diensten
              </Link>
              <Link href="/vrouwencommissie" onClick={() => setIsMobileMenuOpen(false)}>
                Vrouwencommissie
              </Link>
              <Link href="/doneren" onClick={() => setIsMobileMenuOpen(false)}>
                Doneren
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>

            <div className="mt-auto">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}