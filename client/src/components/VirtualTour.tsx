import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TourLocation {
  id: string;
  imagePath: string;
}

const tourLocations: TourLocation[] = [
  {
    id: "prayerHall",
    imagePath: "/images/mosque/prayer-hall.jpg",
  },
  {
    id: "entrance",
    imagePath: "/images/mosque/entrance.jpg",
  },
  {
    id: "ablution",
    imagePath: "/images/mosque/ablution.jpg",
  },
  {
    id: "education",
    imagePath: "/images/mosque/education.jpg",
  },
];

export function VirtualTour() {
  const { t } = useTranslation();

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif mb-4">{t('virtualTour.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('virtualTour.description')}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {tourLocations.map((location) => (
              <CarouselItem key={location.id} className="md:basis-1/1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <img
                        src={location.imagePath}
                        alt={t(`virtualTour.areas.${location.id}.title`)}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                        <h3 className="text-xl font-medium mb-2">
                          {t(`virtualTour.areas.${location.id}.title`)}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {t(`virtualTour.areas.${location.id}.description`)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-4">
            <CarouselPrevious 
              variant="outline"
              className="relative static translate-y-0 bg-white"
            >
              {t('virtualTour.controls.previous')}
            </CarouselPrevious>
            <CarouselNext 
              variant="outline"
              className="relative static translate-y-0 bg-white"
            >
              {t('virtualTour.controls.next')}
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}