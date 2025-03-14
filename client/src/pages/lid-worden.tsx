import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Membership() {
  const { t } = useTranslation();

  useEffect(() => {
    // Create and append JotForm script
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/241355412255349";
    script.async = true;
    script.type = "text/javascript";

    document.getElementById("jotform-container")?.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      const container = document.getElementById("jotform-container");
      if (container) {
        const scriptElement = container.querySelector("script");
        if (scriptElement) {
          container.removeChild(scriptElement);
        }
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif mb-4">{t('membership.title')}</h1>
        <h2 className="text-xl text-gray-600 mb-2">{t('membership.subtitle')}</h2>
        <p className="text-gray-600 mb-8">{t('membership.description')}</p>
        <div id="jotform-container" className="w-full bg-white rounded-lg shadow-sm p-6"></div>
      </main>
      <Footer />
    </div>
  );
}