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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif mb-8">{t('membership.title')}</h1>
        <p className="text-gray-600 mb-8">{t('membership.description')}</p>
        <div id="jotform-container" className="w-full"></div>
      </main>
      <Footer />
    </div>
  );
}