import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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
            {t('contact.title')}
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
                  <h3 className="text-xl font-medium mb-2">{t('contact.email.title')}</h3>
                  <p className="text-gray-600">{t('contact.email.value')}</p>
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
                  <h3 className="text-xl font-medium mb-2">{t('contact.phone.title')}</h3>
                  <p className="text-gray-600">{t('contact.phone.value')}</p>
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
                  <h3 className="text-xl font-medium mb-2">{t('contact.address.title')}</h3>
                  <p className="text-gray-600">{t('contact.address.value')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t('contact.form.title')}
            </h2>
            <p className="text-gray-600">
              {t('contact.form.subtitle')}
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.firstName')} <span className="text-red-500">*</span>
                </label>
                <Input required className="w-full" />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.lastName')} <span className="text-red-500">*</span>
                </label>
                <Input required className="w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')} <span className="text-red-500">*</span>
                </label>
                <Input type="email" required className="w-full" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.phone')} <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                    🇳🇱 +31
                  </span>
                  <Input type="tel" required className="rounded-l-none flex-1" placeholder="06 12345678" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.form.message')} <span className="text-red-500">*</span>
              </label>
              <Textarea required className="w-full min-h-[150px]" />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button 
                type="submit"
                className="bg-[#2D2B3F] text-white px-8 py-2 rounded hover:bg-[#3D3B4F]"
              >
                {t('contact.form.submit')}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}