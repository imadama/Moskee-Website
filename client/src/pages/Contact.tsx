import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div 
        className="relative h-[300px] bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/contact-background.jpg)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-serif">
            Contact
          </h1>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#CD3A2F] flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">E-mail</h3>
                  <p className="text-gray-600">hdvtiel@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#CD3A2F] flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Telefoonnummer</h3>
                  <p className="text-gray-600">085-0667039</p>
                </div>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#CD3A2F] flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Adres</h3>
                  <p className="text-gray-600">Koornmarkt 20, 4001 KW Tiel</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
