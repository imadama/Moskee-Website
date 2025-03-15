import { useTranslation } from "react-i18next";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Clock } from "lucide-react";

// Temporary mock data - Will be replaced with actual API data
const mockEvents = [
  {
    id: 1,
    title: "Vrijdaggebed",
    description: "Wekelijks vrijdaggebed met preek van onze imam.",
    startDate: new Date("2024-03-15T13:30:00"),
    endDate: new Date("2024-03-15T14:30:00"),
    location: "Hoofdgebedsruimte",
    category: "religious",
    isRecurring: true,
    recurringPattern: "weekly"
  },
  {
    id: 2,
    title: "Koranlessen voor kinderen",
    description: "Wekelijkse Koranlessen voor kinderen van alle leeftijden.",
    startDate: new Date("2024-03-16T10:00:00"),
    endDate: new Date("2024-03-16T13:00:00"),
    location: "Onderwijsruimte",
    category: "educational",
    isRecurring: true,
    recurringPattern: "weekly"
  }
];

export default function Events() {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents = mockEvents.filter(event => 
    selectedCategory === "all" || event.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#2D2B3F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            {t('events.title')}
          </h1>
          <p className="text-lg max-w-3xl">
            {t('events.description')}
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Calendar Section */}
            <div className="lg:col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle>{t('events.categories.all')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Events List Section */}
            <div className="lg:col-span-8">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
                    {t('events.categories.all')}
                  </TabsTrigger>
                  <TabsTrigger value="religious" onClick={() => setSelectedCategory("religious")}>
                    {t('events.categories.religious')}
                  </TabsTrigger>
                  <TabsTrigger value="educational" onClick={() => setSelectedCategory("educational")}>
                    {t('events.categories.educational')}
                  </TabsTrigger>
                  <TabsTrigger value="community" onClick={() => setSelectedCategory("community")}>
                    {t('events.categories.community')}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="space-y-6">
                    {filteredEvents.length > 0 ? (
                      filteredEvents.map((event) => (
                        <Card key={event.id}>
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle>{event.title}</CardTitle>
                                <CardDescription className="mt-2">
                                  {event.description}
                                </CardDescription>
                              </div>
                              {event.isRecurring && (
                                <Badge variant="secondary">
                                  <CalendarDays className="w-4 h-4 mr-1" />
                                  {t('events.recurring')}
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-col space-y-4">
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="w-4 h-4 mr-2" />
                                {event.startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                                {event.endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="w-4 h-4 mr-2" />
                                {event.location}
                              </div>
                            </div>
                            <Button variant="outline" className="mt-4">
                              {t('events.addToCalendar')}
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-center text-gray-500">
                            {t('events.noEvents')}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}