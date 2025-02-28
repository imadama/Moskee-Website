import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { VirtualTour } from "@/components/VirtualTour";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-background.jpg")',
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif">{t('about.title')}</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Who We Are Section */}
          <section className="mb-24">
            <h2 className="text-gray-500 mb-2">{t('about.whoWeAre.subtitle')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/470880607_2406169843057251_6182270794598670102_n.jpg"
                  alt="Süleyman Çelebi Camii Interior"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[#CD3A2F] text-3xl mb-6">
                  {t('about.whoWeAre.title')}
                </h3>
                <p className="text-gray-700 mb-6">
                  {t('about.whoWeAre.description1')}
                </p>
                <p className="text-gray-700 mb-6">
                  {t('about.whoWeAre.description2')}
                </p>
                <p className="text-gray-700 mb-8">
                  {t('about.whoWeAre.description3')}
                </p>
                <Button variant="default">
                  {t('about.whoWeAre.joinButton')}
                </Button>
              </div>
            </div>
          </section>

          {/* Mission and Vision Section */}
          <section>
            <h2 className="text-gray-500 mb-2">{t('about.mission.subtitle')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Content */}
              <div>
                <h3 className="text-[#CD3A2F] text-4xl font-serif mb-6">
                  {t('about.mission.title')}
                </h3>
                <p className="text-gray-700 mb-8">
                  {t('about.mission.description')}
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#CD3A2F] text-xl">•</span>
                    <span className="text-gray-700">
                      {t('about.mission.bulletPoints.education')}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#CD3A2F] text-xl">•</span>
                    <span className="text-gray-700">
                      {t('about.mission.bulletPoints.women')}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#CD3A2F] text-xl">•</span>
                    <span className="text-gray-700">
                      {t('about.mission.bulletPoints.community')}
                    </span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="bg-[#CD3A2F] text-white hover:bg-[#B22A20]"
                >
                  {t('about.mission.educationButton')}
                </Button>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/Screenshot 2025-02-24 at 22.46.27.png"
                  alt="Community Members"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mt-24 mb-24">
            <h2 className="text-gray-500 mb-2">{t('about.team.subtitle')}</h2>
            <div className="text-center mb-12">
              <h3 className="text-[#CD3A2F] text-4xl font-serif mb-4">
                {t('about.team.title')}
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                {t('about.team.description')}
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/man-male-young-person-icon-vector-10458750.jpg"
                    alt="Turan Aslan"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Turan Aslan</h4>
                  <p className="text-gray-600">{t('about.team.roles.imam')}</p>
                </div>
              </div>

              {/* Team Member Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/man-male-young-person-icon-vector-10458750.jpg"
                    alt="Gökhan Önder"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Gökhan Önder</h4>
                  <p className="text-gray-600">{t('about.team.roles.chairman')}</p>
                </div>
              </div>

              {/* Team Member Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/man-male-young-person-icon-vector-10458750.jpg"
                    alt="Gökhan Temirpolat"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Gökhan Temirpolat</h4>
                  <p className="text-gray-600">{t('about.team.roles.viceChairman')}</p>
                </div>
              </div>

              {/* Team Member Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/man-male-young-person-icon-vector-10458750.jpg"
                    alt="Gökhan Çiftçi"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Gökhan Çiftçi</h4>
                  <p className="text-gray-600">{t('about.team.roles.treasurer')}</p>
                </div>
              </div>

              {/* Team Member Card 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/man-male-young-person-icon-vector-10458750.jpg"
                    alt="Zafer Güven"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Zafer Güven</h4>
                  <p className="text-gray-600">{t('about.team.roles.secretary')}</p>
                </div>
              </div>

              {/* Team Member Card 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/man-male-young-person-icon-vector-10458750.jpg"
                    alt="Mahmut Demirel"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Mahmut Demirel</h4>
                  <p className="text-gray-600">{t('about.team.roles.cashier')}</p>
                </div>
              </div>

              {/* Team Member Card 7 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/man-male-young-person-icon-vector-10458750.jpg"
                    alt="Şeref Kaya"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Şeref Kaya</h4>
                  <p className="text-gray-600">{t('about.team.roles.member')}</p>
                </div>
              </div>

              {/* Team Member Card 8 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/man-male-young-person-icon-vector-10458750.jpg"
                    alt="Sefa Aydin"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-lg">Sefa Aydin</h4>
                  <p className="text-gray-600">{t('about.team.roles.member')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual Tour Section */}
          <VirtualTour />
        </div>
      </main>

      {/* Contact Section */}
      <section
        className="relative py-20 bg-cover bg-center mt-24"
        style={{
          backgroundImage: 'url("/images/contact-background.jpg")',
          backgroundPosition: "center"
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