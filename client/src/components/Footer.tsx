import { Link } from "wouter";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4267B2] hover:opacity-80"
              >
                <SiFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
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
              Snelle links
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-[#CD3A2F]">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#CD3A2F]">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-[#CD3A2F]">
                  Onderwijs
                </Link>
              </li>
              <li>
                <Link
                  href="/womens-commission"
                  className="hover:text-[#CD3A2F]"
                >
                  Vrouwencommissie
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-[#CD3A2F] font-medium text-lg mb-4">
              Belangrijke links
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/membership" className="hover:text-[#CD3A2F]">
                  Lid worden
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-[#CD3A2F]">
                  Doneren
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#CD3A2F]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-[#CD3A2F] font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Hoefslag 9, 4205 NK Gorinchem</li>
              <li>hdvgorinchem@vakif.nl</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
