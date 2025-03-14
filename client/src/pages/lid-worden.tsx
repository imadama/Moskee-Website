import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Membership() {
  const { t } = useTranslation();

  useEffect(() => {
    // Create script element for JotForm
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/241355412255349";
    script.async = true;
    script.type = "text/javascript";

    // Add script to document
    document.getElementById("jotform-container")?.appendChild(script);

    // Cleanup
    return () => {
      document.getElementById("jotform-container")?.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#2D2B3F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            {t('membership.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4">
            {t('membership.subtitle')}
          </h2>
          <p className="text-lg max-w-3xl">
            {t('membership.description')}
          </p>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('membership.form.title')}</h2>
            <p className="text-gray-600">{t('membership.form.description')}</p>
          </div>
          <div id="jotform-container" className="bg-white rounded-lg shadow-lg p-6">
            {/* JotForm will be inserted here */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}