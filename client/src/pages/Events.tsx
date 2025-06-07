import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
import { CalendarDays, MapPin, Clock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
  isRecurring?: boolean;
}

export default function Events() {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ['/api/events'],
    refetchInterval: 1000 * 60 * 15 // Refetch every 15 minutes
  });

  // Categorize events based on title/description keywords
  const categorizeEvent = (event: CalendarEvent): string => {
    const title = event.title.toLowerCase();
    const description = event.description?.toLowerCase() || '';
    
    if (title.includes('gebed') || title.includes('friday') || title.includes('jumma') || 
        title.includes('prayer') || title.includes('namaz')) {
      return 'religious';
    }
    if (title.includes('koran') || title.includes('les') || title.includes('onderwijs') || 
        title.includes('education') || title.includes('class')) {
      return 'educational';
    }
    return 'community';
  };

  const filteredEvents = events.filter((event: CalendarEvent) => 
    selectedCategory === "all" || categorizeEvent(event) === selectedCategory
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
              {/* Show configuration message if Google Calendar is not set up */}
              {!calendarService && (
                <Alert className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Google Calendar integration is not configured. Events will be displayed once API credentials are provided.
                  </AlertDescription>
                </Alert>
              )}

              {/* Show loading state */}
              {isLoading && (
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse mt-2"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Show error state */}
              {error && (
                <Alert className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Unable to load events from Google Calendar. Please check the configuration.
                  </AlertDescription>
                </Alert>
              )}

              {/* Show events when available */}
              {!isLoading && !error && (
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
                                  {event.description && (
                                    <CardDescription className="mt-2">
                                      {event.description}
                                    </CardDescription>
                                  )}
                                </div>
                                <div className="flex gap-2">
                                  {event.isRecurring && (
                                    <Badge variant="secondary">
                                      <CalendarDays className="w-4 h-4 mr-1" />
                                      {t('events.recurring')}
                                    </Badge>
                                  )}
                                  <Badge variant="outline">
                                    {t(`events.categories.${categorizeEvent(event)}`)}
                                  </Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-col space-y-4">
                                <div className="flex items-center text-sm text-gray-500">
                                  <Clock className="w-4 h-4 mr-2" />
                                  {new Date(event.start).toLocaleDateString()} - {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  {event.end && ` - ${new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                                </div>
                                {event.location && (
                                  <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {event.location}
                                  </div>
                                )}
                              </div>
                              <Button 
                                variant="outline" 
                                className="mt-4"
                                onClick={() => {
                                  const startDate = new Date(event.start);
                                  const endDate = event.end ? new Date(event.end) : new Date(startDate.getTime() + 60 * 60 * 1000);
                                  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.location || '')}`;
                                  window.open(googleCalendarUrl, '_blank');
                                }}
                              >
                                {t('events.addToCalendar')}
                              </Button>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <Card>
                          <CardContent className="pt-6">
                            <p className="text-center text-gray-500">
                              {calendarService ? t('events.noEvents') : 'Google Calendar integration is not configured.'}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}