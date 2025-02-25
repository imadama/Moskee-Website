import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { NL, TR } from 'country-flag-icons/react/3x2';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'nl' ? 'tr' : 'nl';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage}
      className="w-10 h-10 p-0"
    >
      {currentLanguage === 'nl' ? (
        <TR className="w-6 h-6" title="Switch to Turkish" />
      ) : (
        <NL className="w-6 h-6" title="Switch to Dutch" />
      )}
    </Button>
  );
}