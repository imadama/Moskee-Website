import { Link } from "wouter";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div>
            <img
              src="/images/hdv-logo.png"
              alt="HDV Logo"
              className="h-24 w-auto mb-6"
            />
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/HDV-Gorinchem-S%C3%BCleyman-%C3%87elebi-cami-61551672875584/?locale=nl_NL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4267B2] hover:opacity-80"
              >
                <SiFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/hdvsuleymancelebi?igsh=MWZ5eXc0ejhkbjJvdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] hover:opacity-80"
              >
                <SiInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#CD3A2F] font-medium text-lg mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-[#CD3A2F]">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#CD3A2F]">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-[#CD3A2F]">
                  {t('nav.education')}
                </Link>
              </li>
              <li>
                <Link
                  href="/womens-commission"
                  className="hover:text-[#CD3A2F]"
                >
                  {t('nav.womensCommission')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-[#CD3A2F] font-medium text-lg mb-4">
              {t('footer.importantLinks')}
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/lid-worden" className="hover:text-[#CD3A2F]">
                  {t('nav.membership')}
                </Link>
              </li>
              <li>
                <a 
                  href="https://betaalverzoek.rabobank.nl/betaalverzoek/?id=33XkU1UVTwKuCEUf5wy6JA"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-[#CD3A2F]"
                >
                  {t('nav.donate')}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#CD3A2F]">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-[#CD3A2F] font-medium text-lg mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>{t('contact.address.value')}</li>
              <li>{t('contact.email.value')}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}