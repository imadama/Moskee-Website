```tsx
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { User, Announcement, Donation } from "@shared/schema";

export default function Dashboard() {
  const { t } = useTranslation();

  // Fetch user data
  const { data: user, isLoading: userLoading } = useQuery<User>({
    queryKey: ['/api/user/profile'],
  });

  // Fetch announcements
  const { data: announcements, isLoading: announcementsLoading } = useQuery<Announcement[]>({
    queryKey: ['/api/announcements'],
  });

  // Fetch donations
  const { data: donations, isLoading: donationsLoading } = useQuery<Donation[]>({
    queryKey: ['/api/donations'],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Welcome Section */}
          <section className="mb-12">
            <h1 className="text-4xl font-serif mb-4">
              Welkom terug, {user?.fullName || 'Lid'}
            </h1>
            <p className="text-gray-600">
              Bekijk uw persoonlijke dashboard en blijf op de hoogte van de gemeenschap.
            </p>
          </section>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>Profiel</CardTitle>
                <CardDescription>Uw persoonlijke gegevens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Naam:</strong> {user?.fullName}</p>
                  <p><strong>Email:</strong> {user?.email}</p>
                  <p><strong>Telefoon:</strong> {user?.phoneNumber}</p>
                  <p><strong>Lidmaatschap:</strong> {user?.membershipStatus}</p>
                </div>
                <Button className="mt-4">Bewerk profiel</Button>
              </CardContent>
            </Card>

            {/* Announcements Card */}
            <Card>
              <CardHeader>
                <CardTitle>Mededelingen</CardTitle>
                <CardDescription>Laatste gemeenschapsnieuws</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements?.slice(0, 3).map((announcement) => (
                    <div key={announcement.id} className="border-b pb-2">
                      <h4 className="font-medium">{announcement.title}</h4>
                      <p className="text-sm text-gray-600">{announcement.content}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4">Alle mededelingen</Button>
              </CardContent>
            </Card>

            {/* Donations Card */}
            <Card>
              <CardHeader>
                <CardTitle>Donaties</CardTitle>
                <CardDescription>Uw bijdragen aan de gemeenschap</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donations?.slice(0, 3).map((donation) => (
                    <div key={donation.id} className="border-b pb-2">
                      <p className="font-medium">€{donation.amount}</p>
                      <p className="text-sm text-gray-600">{donation.purpose}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(donation.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4">Donatie geschiedenis</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
```
