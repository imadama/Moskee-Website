import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SuccessModal } from "@/components/SuccessModal";

const formSchema = z.object({
  firstName: z.string().min(1, "contact.form.validation.required"),
  lastName: z.string().min(1, "contact.form.validation.required"),
  email: z.string().email("contact.form.validation.email"),
  phone: z.string().min(1, "contact.form.validation.required"),
  message: z.string().min(1, "contact.form.validation.required"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", data);
    setIsSuccessModalOpen(true);
    reset(); // Reset form after successful submission
  };

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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.firstName')} <span className="text-red-500">*</span>
                </label>
                <Input
                  {...register('firstName')}
                  className={`w-full ${errors.firstName ? 'border-red-500' : ''}`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{t(errors.firstName.message!)}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.lastName')} <span className="text-red-500">*</span>
                </label>
                <Input
                  {...register('lastName')}
                  className={`w-full ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{t(errors.lastName.message!)}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  {...register('email')}
                  className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{t(errors.email.message!)}</p>
                )}
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
                  <Input
                    type="tel"
                    {...register('phone')}
                    className={`rounded-l-none flex-1 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="06 12345678"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{t(errors.phone.message!)}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.form.message')} <span className="text-red-500">*</span>
              </label>
              <Textarea
                {...register('message')}
                className={`w-full min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{t(errors.message.message!)}</p>
              )}
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

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.6858831154584!2d5.288299776687481!3d51.830499189693705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c631c8885d0b99%3A0x5a8d2c9900e849a0!2sGorinchem%20HDV%20Moskee!5e0!3m2!1snl!2snl!4v1709126344567!5m2!1snl!2snl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
}