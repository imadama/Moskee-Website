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
          <img
            src="/images/hdv-logo.png"
            alt="HDV Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">{t("nav.home")}</Link>
          <Link href="/about">{t("nav.about")}</Link>
          <Link href="/education">{t("nav.education")}</Link>
          <Link href="/services">{t("nav.services")}</Link>
          <Link href="/contact">{t("nav.contact")}</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Link href="/lid-worden">
            <Button className="bg-[#CD3A2F] text-white hover:bg-[#9C2A22]">
              {t("nav.membership")}
            </Button>
          </Link>
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
          className={`fixed inset-0 bg-white z-50 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/images/hdv-logo.png"
                  alt="HDV Logo"
                  className="h-20 w-auto"
                />
              </Link>
              <button
                className="text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-gray-900 text-xl">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.home")}
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.about")}
              </Link>
              <Link
                href="/education"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.education")}
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.services")}
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.contact")}
              </Link>
              <Link
                href="/lid-worden"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#CD3A2F] font-medium hover:text-[#9C2A22]"
              >
                {t("nav.membership")}
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
